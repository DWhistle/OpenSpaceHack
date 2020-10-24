package ru.dwhistle.tracker.backend.db.beans;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity(name = "BugReport")
public class BugReportEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID", unique = true, nullable = false)
    private int id;
    @Column(name = "reward", nullable = false)
    private BigDecimal reward;
    @Transient
    private BugStatus statusEnum;
    @Transient
    private BugReportSource sourceEnum;
    @Column(name = "status", nullable = false)
    private int status;
    @Column(name = "source", nullable = false)
    private int source;
    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "bug_id")
    private BugEntity bugSpecification;
    @OneToMany(orphanRemoval = true,
            cascade = CascadeType.ALL)
    @JoinColumn(name = "tag_id")
    private List<TagEntity> bugTags;
    @OneToMany(orphanRemoval = true,
            cascade = CascadeType.ALL)
    @JoinColumn(name = "message_id")
    private List<MessageEntity> reportMessages;


    public BugReportEntity() {
    }

    public BugReportEntity(int id, BigDecimal reward, BugStatus statusEnum, BugReportSource sourceEnum, BugEntity bugSpecification, List<TagEntity> bugTags, List<MessageEntity> reportMessages) {
        this.id = id;
        this.reward = reward;
        this.statusEnum = statusEnum;
        this.sourceEnum = sourceEnum;
        this.bugSpecification = bugSpecification;
        this.bugTags = bugTags;
        this.reportMessages = reportMessages;
    }

    @PostLoad
    void fillRoleFromDb() {
        if (status != 0) {
            statusEnum = BugStatus.of(status);
        }
        if (source != 0) {
            sourceEnum = BugReportSource.of(source);
        }
    }

    public void addMessage(MessageEntity messageEntity) {
        reportMessages.add(messageEntity);
    }

    public List<MessageEntity> getMessages() {
        return reportMessages;
    }

    @PrePersist
    void assignRoleId() {
        if (sourceEnum != null) {
            source = sourceEnum.getId();
        }
        if (statusEnum != null) {
            status = statusEnum.getId();
        }
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public BigDecimal getReward() {
        return reward;
    }

    public void setReward(BigDecimal reward) {
        this.reward = reward;
    }


    public BugEntity getBugSpecification() {
        return bugSpecification;
    }

    public void setBugSpecification(BugEntity bugSpecification) {
        this.bugSpecification = bugSpecification;
    }

    public BugStatus getStatusEnum() {
        return statusEnum;
    }

    public void setStatusEnum(BugStatus statusEnum) {
        this.statusEnum = statusEnum;
    }

    public BugReportSource getSourceEnum() {
        return sourceEnum;
    }

    public void setSourceEnum(BugReportSource sourceEnum) {
        this.sourceEnum = sourceEnum;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getSource() {
        return source;
    }

    public void setSource(int source) {
        this.source = source;
    }
}
