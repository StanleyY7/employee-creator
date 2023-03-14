package employeecreator.production.posts;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "posts")
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long Id;
	
	// Personal Details
	
	@Column
	String firstName;

	@Column
	String middleName;

	@Column
	String lastName;

	// Contact Details

	@Column
	String email;

	@Column
	String phoneNumber;

	@Column
	String address;

	// Employee Status

	@Column
	String contractType;

	@Column
	LocalDate datesEmployed;
	
	@Column
	LocalDate datesEmployedEnd;

	@Column
	String employmentType;

	@Column
	Number hoursPW;
	
	// Constructor

	public Post(Long id, String firstName, String middleName, String lastName, String email, String phoneNumber,
			String address, String contractType, LocalDate datesEmployed, LocalDate datesEmployedEnd, String employmentType, Number hoursPW) {
		super();
		Id = id;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.contractType = contractType;
		this.datesEmployed = datesEmployed;
		this.datesEmployedEnd = datesEmployedEnd;
		this.employmentType = employmentType;
		this.hoursPW = hoursPW;
	}
	
	public Post() {}
	
	// Getters and Setters

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

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

	public LocalDate getDatesEmployed() {
		return datesEmployed;
	}

	public void setDatesEmployed(LocalDate postDatesEmployed) {
		this.datesEmployed = postDatesEmployed;
	}
	
	public LocalDate getDatesEmployedEnd() {
		return datesEmployedEnd;
	}

	public void setDatesEmployedEnd(LocalDate postDatesEmployedEnd) {
		this.datesEmployedEnd = postDatesEmployedEnd;
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
