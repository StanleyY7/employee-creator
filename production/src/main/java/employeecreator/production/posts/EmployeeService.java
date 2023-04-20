package employeecreator.production.posts;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	private static final Logger logger = LoggerFactory.getLogger(EmployeeService.class);
	
	public Employee create(CreateEmployeeDto data) {
		
		String postFirstName = data.getFirstName().trim();
		String postMiddleName = data.getMiddleName();
		String postLastName = data.getLastName().trim();
		String postEmail = data.getEmail().trim();
		String postPhoneNumber = data.getPhoneNumber().trim();
		String postAddress = data.getAddress().trim();
		String postContractType = data.getContractType().trim();
		LocalDate postDatesEmployedFirst = data.getDatesEmployedFirst();
		LocalDate postDatesEmployedEnd = data.getDatesEmployedEnd();
		Boolean postOnGoing = data.getOnGoing();
		String postEmploymentType = data.getEmploymentType().trim();
		Number postHoursPW = data.getHoursPW();
		
		// Log input data
		logger.info("Creating new employee with data: " +
	            "firstName={}, middleName={}, lastName={}, email={}, " +
	            "phoneNumber={}, address={}, contractType={}, " +
	            "datesEmployedFirst={}, datesEmployedEnd={}, onGoing={}, " +
	            "employmentType={}, hoursPW={}",
	            postFirstName, postMiddleName, postLastName, postEmail,
	            postPhoneNumber, postAddress, postContractType,
	            postDatesEmployedFirst, postDatesEmployedEnd, postOnGoing,
	            postEmploymentType, postHoursPW);

		
		Employee newEmployee = new Employee();
		
		newEmployee.setFirstName(postFirstName);
		newEmployee.setMiddleName(postMiddleName);
		newEmployee.setLastName(postLastName);
		newEmployee.setEmail(postEmail);
		newEmployee.setPhoneNumber(postPhoneNumber);
		newEmployee.setAddress(postAddress);
		newEmployee.setContractType(postContractType);
		newEmployee.setDatesEmployedFirst(postDatesEmployedFirst);
		newEmployee.setDatesEmployedEnd(postDatesEmployedEnd);
		newEmployee.setOnGoing(postOnGoing);
		newEmployee.setEmploymentType(postEmploymentType);
		newEmployee.setHoursPW(postHoursPW);
			
		return this.employeeRepository.save(newEmployee);
	}

	public List<Employee> findAll() {
		return this.employeeRepository.findAll();
	}

	public Optional<Employee> findById(Long id) {
		return this.employeeRepository.findById(id);
	}
	
	public Optional<Employee> updateById(Long id, UpdateEmployeeDto data){
		Optional<Employee> maybeEmployee = this.findById(id);
		if(maybeEmployee.isEmpty()) {
			return maybeEmployee;
		}
		
		Employee existingEmployee = maybeEmployee.get();
		existingEmployee.setFirstName(data.getFirstName());
		existingEmployee.setMiddleName(data.getMiddleName());
		existingEmployee.setLastName(data.getLastName());
		existingEmployee.setEmail(data.getEmail());
		existingEmployee.setPhoneNumber(data.getPhoneNumber());
		existingEmployee.setAddress(data.getAddress());
		existingEmployee.setContractType(data.getContractType());
		existingEmployee.setDatesEmployedFirst(data.getDatesEmployedFirst());
		existingEmployee.setDatesEmployedEnd(data.getDatesEmployedEnd());
		existingEmployee.setOnGoing(data.getOnGoing());
		existingEmployee.setEmploymentType(data.getEmploymentType());
		existingEmployee.setHoursPW(data.getHoursPW());
		
        // Log updated employee data
		logger.info("Updating employee with ID {} with data: " +
	            "firstName={}, middleName={}, lastName={}, email={}, " +
	            "phoneNumber={}, address={}, contractType={}, " +
	            "datesEmployedFirst={}, datesEmployedEnd={}, onGoing={}, " +
	            "employmentType={}, hoursPW={}",
	            id,
	            existingEmployee.getFirstName(), existingEmployee.getMiddleName(), existingEmployee.getLastName(), existingEmployee.getEmail(),
	            existingEmployee.getPhoneNumber(), existingEmployee.getAddress(), existingEmployee.getContractType(),
	            existingEmployee.getDatesEmployedFirst(), existingEmployee.getDatesEmployedEnd(), existingEmployee.getOnGoing(),
	            existingEmployee.getEmploymentType(), existingEmployee.getHoursPW());

		
		return Optional.of(this.employeeRepository.save(existingEmployee));
	}

	public void deleteById(Long id) {
		this.employeeRepository.deleteById(id);
	}
	
	
}
