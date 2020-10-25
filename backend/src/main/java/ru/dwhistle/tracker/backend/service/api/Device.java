package ru.dwhistle.tracker.backend.service.api;

public class Device {
    public int id;
    public String name;
    public String os;
    public String osVersion;
    public String environment;
    public String environmentVersion;

    public Device() {
    }

    public Device(int id, String name, String os, String osVersion, String environment, String environmentVersion) {
        this.id = id;
        this.name = name;
        this.os = os;
        this.osVersion = osVersion;
        this.environment = environment;
        this.environmentVersion = environmentVersion;
    }
}
