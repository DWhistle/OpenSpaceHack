package ru.dwhistle.tracker.backend.db.beans;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "ReportMessage")
public class ReportMessageEntity {
    @Id
    private int id;
    private int reportId;
    private int userId;
    private String message;
}
