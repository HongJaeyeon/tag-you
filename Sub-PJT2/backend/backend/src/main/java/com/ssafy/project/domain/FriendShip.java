package com.ssafy.project.domain;


import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@Entity
public class FriendShip extends BaseTimeEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long friendshipId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "friend_id")
    private User friendUser;

    @Enumerated(EnumType.STRING)
    private FreindShipStatus freindShipStatus; // FOLLOW, UNFOLLOW

    @Builder
    public FriendShip(User user, User friendUser, FreindShipStatus freindShipStatus) {
        this.user = user;
        this.friendUser = friendUser;
        this.freindShipStatus = freindShipStatus;
    }
}
