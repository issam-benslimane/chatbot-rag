package com.example.chatbotrag.services;

import com.example.chatbotrag.entities.Person;
import com.example.chatbotrag.repositories.PersonRepository;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import com.vaadin.hilla.crud.CrudRepositoryService;

@BrowserCallable
@AnonymousAllowed
public class PersonService extends CrudRepositoryService<Person, Long, PersonRepository> {
    public PersonService(PersonRepository repository) {
        super(repository);
    }
}
