package com.ssafy.project.domain.room;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QOneMeetingRoom is a Querydsl query type for OneMeetingRoom
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QOneMeetingRoom extends EntityPathBase<OneMeetingRoom> {

    private static final long serialVersionUID = -168233931L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QOneMeetingRoom oneMeetingRoom = new QOneMeetingRoom("oneMeetingRoom");

    public final QMeetingRoom _super = new QMeetingRoom(this);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdDate = _super.createdDate;

    public final com.ssafy.project.domain.user.QUser femaleUser;

    //inherited
    public final NumberPath<Long> id = _super.id;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> lastUsedDate = _super.lastUsedDate;

    public final com.ssafy.project.domain.user.QUser maleUser;

    //inherited
    public final StringPath sessionId = _super.sessionId;

    //inherited
    public final EnumPath<MeetingRoomStatus> status = _super.status;

    public QOneMeetingRoom(String variable) {
        this(OneMeetingRoom.class, forVariable(variable), INITS);
    }

    public QOneMeetingRoom(Path<? extends OneMeetingRoom> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QOneMeetingRoom(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QOneMeetingRoom(PathMetadata metadata, PathInits inits) {
        this(OneMeetingRoom.class, metadata, inits);
    }

    public QOneMeetingRoom(Class<? extends OneMeetingRoom> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.femaleUser = inits.isInitialized("femaleUser") ? new com.ssafy.project.domain.user.QUser(forProperty("femaleUser"), inits.get("femaleUser")) : null;
        this.maleUser = inits.isInitialized("maleUser") ? new com.ssafy.project.domain.user.QUser(forProperty("maleUser"), inits.get("maleUser")) : null;
    }

}

