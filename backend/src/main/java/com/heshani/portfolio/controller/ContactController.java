package com.heshani.portfolio.controller;

import com.heshani.portfolio.model.ContactMessage;
import com.heshani.portfolio.repository.ContactMessageRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "http://localhost:5174"
})
public class ContactController {

    private final ContactMessageRepository repository;

    public ContactController(ContactMessageRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public ContactMessage saveMessage(@RequestBody ContactMessage contactMessage) {
        return repository.save(contactMessage);
    }
}