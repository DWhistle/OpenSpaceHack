package ru.dwhistle.tracker.frontend.api;

import ru.dwhistle.tracker.backend.db.beans.Role;

import javax.validation.constraints.NotNull;

public class User {
    public int id;
    @NotNull
    public String name;
    public String bio;
    @NotNull
    public String username;
    @NotNull
    public Role roleEnum;

    public User() {
    }

    public User(int id, @NotNull String name, String bio, @NotNull String username, @NotNull Role roleEnum) {
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.username = username;
        this.roleEnum = roleEnum;
    }
}
