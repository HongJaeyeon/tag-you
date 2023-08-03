package com.ssafy.project.domain.room;

import com.ssafy.project.domain.group.MeetingGroup;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@DiscriminatorValue("T")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class GroupMeetingRoom extends MeetingRoom {

    private boolean isReady; // 대기 : 0 대기 완료 : 1

    private int maleCount; // maxCnt = 3
    private int femaleCount; // maxCnt = 3

    @OneToMany(mappedBy = "meetingRoom", cascade = CascadeType.ALL)
    private List<MeetingGroup> groupMeetingRooms = new ArrayList<>();

}