package ru.dwhistle.tracker.backend.db.beans;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "Message")
public class MessageEntity {

    @OneToOne(targetEntity = UserEntity.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private UserEntity messageCreator;
    @Column(name = "Text", nullable = false)
    private String text;
    @Column(name = "CreationDate", nullable = false)
    private Date creationDate;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Id", nullable = false, unique = true)
    private int id;

    public MessageEntity() {
    }

    public MessageEntity(UserEntity messageCreator, String text, Date creationDate) {
        this.messageCreator = messageCreator;
        this.text = text;
        this.creationDate = creationDate;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public int getId() {
        return id;
    }


    public void setId(int id) {
        this.id = id;
    }

    public UserEntity getMessageCreator() {
        return messageCreator;
    }
}
