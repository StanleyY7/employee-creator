package employeecreator.production.posts;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = {"http://127.0.0.1:5173/", "http://localhost:8080", "http://localhost:5173", "http://localhost:5174", "http://127.0.0.1:5174/"})
@RequestMapping("/employees")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	private static final Logger logger = LoggerFactory.getLogger(EmployeeService.class);
	
	// Constructor
	public EmployeeController(EmployeeService employeeService) {
	    this.employeeService = employeeService;
	}

	@PostMapping
	public ResponseEntity<Employee> createPost(@Valid @RequestBody CreateEmployeeDto data) {
		Employee createdEmployee = this.employeeService.create(data);
		return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Employee>> findAll(){
		List<Employee> allEmployees = this.employeeService.findAll();
		return new ResponseEntity<>(allEmployees, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getById(@PathVariable Long id){
		Optional<Employee> maybeEmployee = this.employeeService.findById(id);
		if (maybeEmployee.isEmpty()){
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		logger.info("Found employee with ID {}", id);
		return new ResponseEntity<>(maybeEmployee.get(), HttpStatus.OK);
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<Employee> updateById(@PathVariable Long id, @Valid @RequestBody UpdateEmployeeDto data) {
	    Optional<Employee> maybeUpdatedEmployee = this.employeeService.updateById(id, data);
	    if (maybeUpdatedEmployee.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }

	    Employee updatedPost = maybeUpdatedEmployee.get();
	    return new ResponseEntity<>(updatedPost, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> deleteById(@PathVariable Long id){
		Optional<Employee> maybeEmployee = this.employeeService.findById(id);
		if (maybeEmployee.isEmpty()){
			logger.info("No employee found with ID {}", id);
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		this.employeeService.deleteById(id);
		logger.info("Employee with ID {} ", id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
}
	

