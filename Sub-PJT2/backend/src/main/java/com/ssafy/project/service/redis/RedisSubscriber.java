package com.ssafy.project.service.redis;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.project.domain.message.ChatMessagePayload;
import com.ssafy.project.dto.request.RoomMessageReqDto;
import com.ssafy.project.dto.response.RoomMessageRspDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.connection.MessageListener;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class RedisSubscriber implements MessageListener {

    private final ObjectMapper objectMapper;
    private final RedisTemplate<String, Object> redisTemplate;
    private final SimpMessageSendingOperations messagingTemplate;

    /**
     *  Redis 에서 메시지가 발행(Publish)되면
     *  대기하고 있던 onMessage()가 해당 메시지를 받아 처리
     *  (Subscribe)
     */
    @Override
    public void onMessage(Message message, byte[] pattern) {
        try {
            // Redis 에서 발행된 데이터를 받아 Deserialize
            String publishedMessage = redisTemplate.getStringSerializer().deserialize(message.getBody());

            // ChatMessage 객체로 매핑
            ChatMessagePayload chatMessage = objectMapper.readValue(publishedMessage, ChatMessagePayload.class);

            // WebSocket 구독자에게 채팅 메시지 전송
            messagingTemplate.convertAndSend("/sub/chat/rooms/" + chatMessage.getMeetingRoomId(), chatMessage);
        }
        catch (Exception ex) {
            log.error(ex.getMessage());
        }
    }
}
