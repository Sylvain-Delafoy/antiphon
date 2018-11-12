package fr.zenika.zebra.antiphon.business;

import java.util.Map;

import lombok.Value;

@Value
public class Individual {
    private final String name, surname;

    private final Map<Skill, Level> skills;
}