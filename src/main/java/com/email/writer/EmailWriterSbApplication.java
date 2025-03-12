// filepath: /Users/tanmayg13/Desktop/email-writer-sb/src/main/java/com/email/writer/EmailWriterSbApplication.java
package com.email.writer;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmailWriterSbApplication {

	public static void main(String[] args) {
		// Load environment variables from .env file
		Dotenv dotenv = Dotenv.load();

		// Set system properties
		System.setProperty("gemini.api.url", dotenv.get("GEMINI_URL"));
		System.setProperty("gemini.api.key", dotenv.get("GEMINI_KEY"));

		SpringApplication.run(EmailWriterSbApplication.class, args);
	}
}