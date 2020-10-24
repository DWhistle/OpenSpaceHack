package ru.dwhistle.tracker.backend.db.beans;

import javax.persistence.*;

@Entity(name = "Tag")
public class TagEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Id", nullable = false, unique = true)
    private int id;
    @Column(name = "Name", unique = true, nullable = false)
    private String name;

    public TagEntity() {
    }

    public TagEntity(String name) {
        this.name = name;
    }
}
