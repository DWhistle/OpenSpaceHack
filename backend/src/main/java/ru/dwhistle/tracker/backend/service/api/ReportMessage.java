package ru.dwhistle.tracker.backend.service.api;

import ru.dwhistle.tracker.backend.db.beans.UserEntity;

import java.util.Date;

public class ReportMessage {
    public User messageCreator;
    public String text;
    public Date creationDate;
    public int id;

    public ReportMessage() {
    }

    public ReportMessage(User messageCreator, String text, Date creationDate, int id) {
        this.messageCreator = messageCreator;
        this.text = text;
        this.creationDate = creationDate;
        this.id = id;
    }
}
