package ru.dwhistle.tracker.backend.util;

public interface PersistableEnum<T extends Enum<T>>{
    public T getValues();
}
