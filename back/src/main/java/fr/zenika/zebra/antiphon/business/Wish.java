package fr.zenika.zebra.antiphon.business;

import java.util.Set;

import lombok.Value;

@Value
public class Wish {
    private final Skill skill;
    private final Individual wisher;
    private final boolean asTutor;
    private final Set<Format> formats;
}