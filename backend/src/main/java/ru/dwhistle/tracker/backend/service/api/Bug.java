package ru.dwhistle.tracker.backend.service.api;

import javax.validation.constraints.NotNull;
import java.util.Date;

public class Bug {
    public int id;
    @NotNull
    public String name;
    @NotNull
    public String os;
    @NotNull
    public String osVersion;
    @NotNull
    public String appVersion;
    @NotNull
    public String stepsToReproduce;
    @NotNull
    public String screenshotUrl;
    public Date creationTime;
    public User bugCreator;

    public Bug() {
    }

    public Bug(int id, @NotNull String name, @NotNull String os, @NotNull String osVersion, @NotNull String appVersion, @NotNull String stepsToReproduce, @NotNull String screenshotUrl, Date creationTime, User bugCreator) {
        this.id = id;
        this.name = name;
        this.os = os;
        this.osVersion = osVersion;
        this.appVersion = appVersion;
        this.stepsToReproduce = stepsToReproduce;
        this.screenshotUrl = screenshotUrl;
        this.creationTime = creationTime;
        this.bugCreator = bugCreator;
    }
}

