package ru.dwhistle.tracker.backend.db.beans;

import java.util.Arrays;

public enum Role {
    USER(1),
    ADMIN(2),
    TESTER(3);

    private final int id;

    private Role(int id) {
        this.id = id;
    }

    public int getId() {
        return this.id;
    }

    public static Role of(int id){
        return Arrays.stream(Role.values())
                .filter(r -> r.id == id)
                .findFirst()
                .orElseThrow();
    }
}
