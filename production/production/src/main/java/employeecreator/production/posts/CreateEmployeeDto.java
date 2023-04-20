package employeecreator.production.posts;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateEmployeeDto {

// Personal Information
	
@NotBlank
String firstName;

String middleName;

@NotBlank
String lastName;

// Contact Details

@NotBlank
String email;

@NotBlank
String phoneNumber;

@NotBlank
String address;

// Employee Status

@NotBlank
String contractType;

@NotNull
LocalDate datesEmployedFirst;

@NotNull
LocalDate datesEmployedEnd;

@NotNull
Boolean onGoing;

@NotBlank
String employmentType;

@NotNull
Number hoursPW;

// Getters and Setters

public String getFirstName() {
	return firstName;
}

public void setFirstName(String firstName) {
	this.firstName = firstName;
}

public String getMiddleName() {
	return middleName;
}

public void setMiddleName(String middleName) {
	this.middleName = middleName;
}

public String getLastName() {
	return lastName;
}

public void setLastName(String lastName) {
	this.lastName = lastName;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPhoneNumber() {
	return phoneNumber;
}

public void setPhoneNumber(String phoneNumber) {
	this.phoneNumber = phoneNumber;
}

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}

public String getContractType() {
	return contractType;
}

public void setContractType(String contractType) {
	this.contractType = contractType;
}

public LocalDate getDatesEmployedFirst() {
	return datesEmployedFirst;
}

public void setDatesEmployed(LocalDate datesEmployedFirst) {
	this.datesEmployedFirst = datesEmployedFirst;
}

public LocalDate getDatesEmployedEnd() {
	return datesEmployedEnd;
}

public void setDatesEmployedEnd(LocalDate datesEmployedEnd) {
	this.datesEmployedEnd = datesEmployedEnd;
}

public Boolean getOnGoing() {
	return onGoing;
}

public void setOnGoing(Boolean onGoing) {
	this.onGoing = onGoing;
}

public String getEmploymentType() {
	return employmentType;
}

public void setEmploymentType(String employmentType) {
	this.employmentType = employmentType;
}

public Number getHoursPW() {
	return hoursPW;
}

public void setHoursPW(Number hoursPW) {
	this.hoursPW = hoursPW;
}

}
