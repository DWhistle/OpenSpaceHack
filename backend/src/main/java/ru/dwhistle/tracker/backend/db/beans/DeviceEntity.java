package ru.dwhistle.tracker.backend.db.beans;

import javax.persistence.*;

@Entity(name = "Device")
public class DeviceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Id", nullable = false, unique = true)
    private int id;
    @Column(name = "Name", unique = true, nullable = false)
    private String name;
    @Column(name = "OS")
    private String os;
    @Column(name = "OSVersion")
    private String osVersion;
    @Column(name = "Environment")
    private String environment;
    @Column(name = "EnvironmentVersion")
    private String environmentVersion;

    public DeviceEntity() {
    }

    public DeviceEntity(String name, String os, String osVersion, String environment, String environmentVersion) {
        this.name = name;
        this.os = os;
        this.osVersion = osVersion;
        this.environment = environment;
        this.environmentVersion = environmentVersion;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOs() {
        return os;
    }

    public void setOs(String os) {
        this.os = os;
    }

    public String getOsVersion() {
        return osVersion;
    }

    public void setOsVersion(String osVersion) {
        this.osVersion = osVersion;
    }

    public String getEnvironment() {
        return environment;
    }

    public void setEnvironment(String environment) {
        this.environment = environment;
    }

    public String getEnvironmentVersion() {
        return environmentVersion;
    }

    public void setEnvironmentVersion(String environmentVersion) {
        this.environmentVersion = environmentVersion;
    }

}

