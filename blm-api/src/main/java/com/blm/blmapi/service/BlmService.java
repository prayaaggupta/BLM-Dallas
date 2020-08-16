package com.blm.blmapi.service;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blm.blmapi.entity.CongressmenInfo;
import com.blm.blmapi.entity.UserInputEntity;

@Service
public class BlmService {

	//generates a custom email based off of user info(name, location)
	public static void sendMail(UserInputEntity userInfo, CongressmenInfo congressman) throws Exception {
		String name = userInfo.getFirstName() + " " + userInfo.getLastName(); //accesses the user info in order to add to the body of the email
		String congressmanName = congressman.getCongressman();
		String place = congressman.getZipCodeName() + ", TX";
		String recEmail = congressman.getEmail();
		// generates the body of the email based on the designated congressmen and user info
		String body = "Dear Congressman " + congressmanName + ", \n\n\tMy name is " + name + " and I am from " + 
				place +  ". I wanted to write to you about certain concerns that I felt needed to be addressed"
				+ " in our society today.\n\n\t" + "The tragic killing of George Floyd by Officer Derek Chauvin"
				+ " proved something we all knew: we’ve got a policing problem in this country.\n\n\tOne problem is "
				+ "the doctrine of qualified immunity. This protects officers from being sued for their actions in "
				+ "the line of duty. In other words, if you have your civil rights violated by the police, you can’t"
				+ " sue for damages. This must change. Until we raise the costs to police of violating our civil "
				+ "rights, we’ll continue to get overly aggressive and careless policing.\n\n\tA second thing Congress"
				+ " could do is pass legislation to further encourage better data collection about what police do "
				+ "and how they do it. For example, no one really knows how often American police use force, why "
				+ "force was used, whether it was justified, or under what circumstances it is effective. No one "
				+ "knows how many high-speed pursuits have been conducted or why they were initiated; how many "
				+ "fleeing drivers have been caught, or the number of collisions, injuries, or deaths that resulted."
				+ " Only one state—Utah—requires agencies to report forcible entries and tactical-team deployments. "
				+ "Neither the police, nor anyone else, can tell us how many people have been injured when taken into"
				+ " custody, how many people have been arrested only to be later released without charges, or how many"
				+ " cases local prosecutors have refused to file for lack of evidence, constitutional violations, or "
				+ "police misconduct.\n\n\tThankfully, legislators are moving to address this issue. Reps. Justin Amash"
				+ " (L-MI) and Ayanna Pressley (D-MA) have introduced the Ending Qualified Immunity Act, to eliminate "
				+ "qualified immunity and restore Americans\\’ ability to obtain relief when state and local officials,"
				+ " including police officers, violate their legal and constitutionally secured rights.\n\n\tWest Texans"
				+ " have always stood up for law and order. Ending qualified immunity is a crucial law-and-order issue. "
				+ "We all recognize, as St. Augustine did, that without justice, there’s no difference between a government"
				+ " officer and a bandit. By ending qualified immunity, we can secure justice and the rule of law.\n\n\tIt’s"
				+ " the job of police to serve and protect. But it’s up to us, the citizens, to make sure they do so. "
				+ "Let’s stand together to end qualified immunity now.\n\n\nSincerely, \n\n" + name;
		
		Properties properties = new Properties(); // essentially acts as key value pairs, subclass of HashTable, both values are strings

		properties.put("mail.smtp.auth", "true"); // set to true
		properties.put("mail.smtp.starttls.enable", "true"); // set to true, DNS server
		properties.put("mail.smtp.host", "smtp.gmail.com"); // smtp server for gmail
		properties.put("mail.smtp.port", "587"); // port 587, can also use 465
		
		Session session = Session.getDefaultInstance(properties, new Authenticator() { //authenticator instance
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(userInfo.getEmail(), userInfo.getPassword());
			}
		});
		Message message = prepareMessage(session, userInfo.getEmail(), recEmail, body, name); //creates message
		Transport.send(message); // sends message
	}
	
	//prepares the message to be sent by accessing the user email information and recipient information
	private static Message prepareMessage(Session session, String myAccount, String recepient, String body, String name) {
		try { //potential error
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(myAccount));
			message.setRecipient(Message.RecipientType.TO, new InternetAddress(recepient)); //either to, bc, cc
			message.setSubject("A urgent message from " + name + " regarding necessary policy changes."); 
			message.setText(body);
			return message;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
}
