package com.ssafy.project.domain.user;

import com.ssafy.project.domain.BaseTimeEntity;
import com.ssafy.project.domain.user.Profile;
import com.ssafy.project.domain.user.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
public class Comment extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name= "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_profile_id")
    private Profile profile;

    @Builder
    public Comment(String content, User user, Profile profile) {
        this.content = content;
        this.user = user;
        this.profile = profile;
    }

    public void updateComment(String content){
        this.content = content;
    }
}
