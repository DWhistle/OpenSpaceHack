package ru.dwhistle.tracker.controller.api;

import ru.dwhistle.tracker.backend.service.api.Bug;
import ru.dwhistle.tracker.backend.service.api.User;

import java.util.Date;

public class BugRequest extends Bug {
    public transient int id;
    public transient Date creationTime;
    public transient User bugCreator;
}
