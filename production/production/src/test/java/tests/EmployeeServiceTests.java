package tests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.LocalDate;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import employeecreator.production.EmployeeCreatorApplication;
import employeecreator.production.posts.CreateEmployeeDto;
import employeecreator.production.posts.Employee;
import employeecreator.production.posts.EmployeeRepository;
import employeecreator.production.posts.EmployeeService;


@SpringBootTest(classes=EmployeeCreatorApplication.class)
public class EmployeeServiceTests {
	
	 	@Mock
	    private EmployeeRepository postRepository;
	    
	    @InjectMocks
	    private EmployeeService postsService;
	    
	    @BeforeEach
	    public void setup() {
	        MockitoAnnotations.openMocks(this);
	    }
	    
	    @Test
	    public void testCreateEmployee() {
	        CreateEmployeeDto employeeDto = new CreateEmployeeDto();
	        employeeDto.setFirstName("John");
	        employeeDto.setLastName("Doe");
	        employeeDto.setEmail("john.doe@example.com");
	        employeeDto.setPhoneNumber("1234567890");
	        employeeDto.setAddress("123 Example St, Sydney NSW 2000");
	        employeeDto.setContractType("Full-time");
	        employeeDto.setDatesEmployed(LocalDate.of(2021, 1, 1));
	        employeeDto.setDatesEmployedEnd(LocalDate.of(2021, 12, 31));
	        employeeDto.setOnGoing(false);
	        employeeDto.setEmploymentType("Salaried");
	        employeeDto.setHoursPW(40);

	        

	        when(postRepository.save(Mockito.any(Employee.class))).thenAnswer(invocation -> {
	            Employee employee = invocation.getArgument(0);
	            employee.setId(1L); // set the id to simulate the creation of a new post
	            return employee;
	        });

	        Employee createdEmployee = postsService.create(employeeDto);
	        
	        assertThat(createdEmployee).isNotNull();
	        assertThat(createdEmployee.getFirstName()).isEqualTo("John");
	        assertThat(createdEmployee.getLastName()).isEqualTo("Doe");
	        assertThat(createdEmployee.getEmail()).isEqualTo("john.doe@example.com");
	        assertThat(createdEmployee.getPhoneNumber()).isEqualTo("1234567890");
	        assertThat(createdEmployee.getAddress()).isEqualTo("123 Example St, Sydney NSW 2000");
	        assertThat(createdEmployee.getContractType()).isEqualTo("Full-time");
	        assertThat(createdEmployee.getDatesEmployed()).isEqualTo(LocalDate.of(2021, 1, 1));
	        assertThat(createdEmployee.getDatesEmployedEnd()).isEqualTo(LocalDate.of(2021, 12, 31));
	        assertThat(createdEmployee.getOnGoing()).isEqualTo(false);
	        assertThat(createdEmployee.getEmploymentType()).isEqualTo("Salaried");
	        assertThat(createdEmployee.getHoursPW()).isEqualTo(40);
	        
	        verify(postRepository, times(1)).save(createdEmployee);
	    }
	@Test
	public void testNullPost() {
	    CreateEmployeeDto employeeDto = new CreateEmployeeDto(); 
	    employeeDto.setFirstName(null);
	    employeeDto.setLastName("Smith");
	    employeeDto.setEmail("john.doe@example.com");
	    employeeDto.setPhoneNumber("04123456789");
	    employeeDto.setAddress("123 Example St, Sydney NSW 2000");
	    employeeDto.setContractType("Contract");
	    employeeDto.setDatesEmployed(LocalDate.of(2021, 1, 1));
	    employeeDto.setDatesEmployedEnd(LocalDate.of(2021, 12, 31));
	    employeeDto.setOnGoing(false);
	    employeeDto.setEmploymentType("Full-time");
	    employeeDto.setHoursPW(40);

	    assertThrows(NullPointerException.class, () -> postsService.create(employeeDto));
	}

}
