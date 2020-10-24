package ru.dwhistle.tracker.backend.service.api;

import ru.dwhistle.tracker.backend.db.beans.UserEntity;

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

}

