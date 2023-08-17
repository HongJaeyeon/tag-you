package com.ssafy.project.dto.response;

import com.ssafy.project.domain.Gender;
import com.ssafy.project.domain.friend.FriendShip;
import com.ssafy.project.domain.friend.FriendShipStatus;
import com.ssafy.project.domain.user.User;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;

@Getter
@Schema(description = "친구 상세 Response DTO")
public class FriendInfoRspDto {
    @Schema(description = "타겟 유저 아이디")
    private Long targetId;
    @Schema(description = "타겟 유저 이름")
    private String targetName;
    @Schema(description = "타겟 유저 성별")
    private Gender userGender;
    @Schema(description = "타겟 유저 나이")
    private int userAge;
    @Schema(description = "타겟 유저 이미지 url")
    private String targetImageUrl;
    @Schema(description = "친구 상태")
    private FriendShipStatus friendShipStatus;

    public FriendInfoRspDto(FriendShip friendShip) {
        // 타겟 유저
        User friendUser = friendShip.getTargetUser();

        this.targetId = friendUser.getId();
        this.targetName = friendUser.getUserName();
        this.userAge = friendUser.getUserAge();
        this.userGender =friendUser.getUserGender();
        this.targetImageUrl = friendUser.getMainImage().getFilePath();
        this.friendShipStatus = friendShip.getFriendShipStatus();
    }
}
