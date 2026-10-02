package com.heshani.portfolio.repository;

import com.heshani.portfolio.model.ContactMessage;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactMessageRepository
        extends MongoRepository<ContactMessage, String> {
}