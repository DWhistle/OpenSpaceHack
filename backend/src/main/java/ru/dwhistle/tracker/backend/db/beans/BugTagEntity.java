package ru.dwhistle.tracker.backend.db.beans;

import javax.persistence.Id;

public class BugTagEntity {
    @Id
    private int id;
    private String name;
}
