package ru.dwhistle.tracker.controller.api;

import javax.validation.constraints.NotNull;

public class UserAuthRequest {
    @NotNull
    public String username;
    @NotNull
    public String password;
}
