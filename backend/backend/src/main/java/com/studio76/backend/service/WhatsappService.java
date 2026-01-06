package com.studio76.backend.service;

import com.studio76.backend.model.Booking;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class WhatsappService {

    @Value("${twilio.account.sid}")
    private String accountSid;

    @Value("${twilio.auth.token}")
    private String authToken;

    @Value("${twilio.whatsapp.from}")
    private String from;

    @Value("${twilio.whatsapp.to}")
    private String to;

    // ✅ Initialize Twilio ONCE when app starts
    @PostConstruct
    public void initTwilio() {
        Twilio.init(accountSid, authToken);
        System.out.println("✅ Twilio initialized successfully");
    }

    // ✅ Send WhatsApp booking notification
    public void sendBookingNotification(Booking booking) {

        String message =
                "📸 *New Booking – Studio76*\n\n" +
                "👤 Name: " + booking.getName() + "\n" +
                "📧 Email: " + booking.getEmail() + "\n" +
                "📞 Phone: " + booking.getPhone() + "\n" +
                "🎯 Service: " + booking.getService() + "\n" +
                "📅 Date: " + booking.getDate();

        Message sentMessage = Message.creator(
                new PhoneNumber(to),     // whatsapp:+91XXXXXXXXXX
                new PhoneNumber(from),   // whatsapp:+14155238886
                message
        ).create();

        System.out.println("📲 WhatsApp sent successfully. SID = " + sentMessage.getSid());
    }
}
