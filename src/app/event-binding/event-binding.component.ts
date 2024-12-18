import { Component } from '@angular/core';
import { Person } from 'src/model/event_binding_interface';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent {
  productaddstatus: string = ` no product added yet!`;
  productCount: number = 0;
  onBtnadd() {
    if (this.productCount < 5) {
      this.productCount++;
      this.productaddstatus = `${this.productCount} product added`;
    }
  }
  onBtnremove() {
    if (this.productCount > 1) {
      this.productCount--;
      this.productaddstatus = `${this.productCount} product added`;
    } else {
      this.productaddstatus = `no product added yet!`;
    }
  }

  onkeyupCb(event: Event) {
    let val = (event.target as HTMLInputElement).value;
    console.log(val);
  }
  onbtnclick(val1: HTMLInputElement) {
    console.log(val1.value);
  }
  cityArr = [
    'New York',
    'London',
    'Tokyo',
    'Paris',
    'Mumbai',
    'Sydney',
    'Cape Town',
    'Beijing',
    'Sao Paulo',
    'Moscow',
  ];

  persionObj: Array<Person> = [
    {
      id: 1,
      name: 'Alice Johnson',
      age: 25,
      gender: 'Female',
      email: 'alice.johnson@example.com',
      phone: '123-456-7890',
      address: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
      country: 'USA',
      occupation: 'Teacher',
      salary: 45000,
      married: false,
    },
    {
      id: 2,
      name: 'Bob Smith',
      age: 30,
      gender: 'Male',
      email: 'bob.smith@example.com',
      phone: '234-567-8901',
      address: '456 Elm St',
      city: 'Metropolis',
      state: 'NY',
      zip: '10001',
      country: 'USA',
      occupation: 'Engineer',
      salary: 80000,
      married: true,
    },
    {
      id: 3,
      name: 'Carol White',
      age: 28,
      gender: 'Female',
      email: 'carol.white@example.com',
      phone: '345-678-9012',
      address: '789 Oak St',
      city: 'Gotham',
      state: 'NJ',
      zip: '07001',
      country: 'USA',
      occupation: 'Nurse',
      salary: 55000,
      married: false,
    },
    {
      id: 4,
      name: 'David Brown',
      age: 40,
      gender: 'Male',
      email: 'david.brown@example.com',
      phone: '456-789-0123',
      address: '321 Pine St',
      city: 'Star City',
      state: 'CA',
      zip: '90001',
      country: 'USA',
      occupation: 'Manager',
      salary: 95000,
      married: true,
    },
    {
      id: 5,
      name: 'Eve Green',
      age: 35,
      gender: 'Female',
      email: 'eve.green@example.com',
      phone: '567-890-1234',
      address: '654 Cedar St',
      city: 'Central City',
      state: 'TX',
      zip: '73301',
      country: 'USA',
      occupation: 'Scientist',
      salary: 120000,
      married: false,
    },
    {
      id: 6,
      name: 'Frank Hall',
      age: 32,
      gender: 'Male',
      email: 'frank.hall@example.com',
      phone: '678-901-2345',
      address: '987 Maple St',
      city: 'Smallville',
      state: 'KS',
      zip: '67501',
      country: 'USA',
      occupation: 'Accountant',
      salary: 70000,
      married: true,
    },
    {
      id: 7,
      name: 'Grace Lee',
      age: 27,
      gender: 'Female',
      email: 'grace.lee@example.com',
      phone: '789-012-3456',
      address: '246 Birch St',
      city: 'Riverdale',
      state: 'PA',
      zip: '19001',
      country: 'USA',
      occupation: 'Artist',
      salary: 65000,
      married: false,
    },
    {
      id: 8,
      name: 'Henry Adams',
      age: 38,
      gender: 'Male',
      email: 'henry.adams@example.com',
      phone: '890-123-4567',
      address: '135 Willow St',
      city: 'Coast City',
      state: 'OR',
      zip: '97001',
      country: 'USA',
      occupation: 'Lawyer',
      salary: 150000,
      married: true,
    },
    {
      id: 9,
      name: 'Ivy Brooks',
      age: 24,
      gender: 'Female',
      email: 'ivy.brooks@example.com',
      phone: '901-234-5678',
      address: '753 Cherry St',
      city: 'Bludhaven',
      state: 'MI',
      zip: '48201',
      country: 'USA',
      occupation: 'Journalist',
      salary: 60000,
      married: false,
    },
    {
      id: 10,
      name: 'Jack Wilson',
      age: 29,
      gender: 'Male',
      email: 'jack.wilson@example.com',
      phone: '012-345-6789',
      address: '369 Walnut St',
      city: 'Hub City',
      state: 'FL',
      zip: '33001',
      country: 'USA',
      occupation: 'Developer',
      salary: 85000,
      married: true,
    },
    {
      id: 11,
      name: 'Karen Baker',
      age: 33,
      gender: 'Female',
      email: 'karen.baker@example.com',
      phone: '234-567-8901',
      address: '111 Cypress St',
      city: 'Gateway City',
      state: 'CO',
      zip: '80001',
      country: 'USA',
      occupation: 'Chef',
      salary: 55000,
      married: false,
    },
    {
      id: 12,
      name: 'Liam Carter',
      age: 37,
      gender: 'Male',
      email: 'liam.carter@example.com',
      phone: '345-678-9012',
      address: '222 Aspen St',
      city: 'Keystone City',
      state: 'WA',
      zip: '98001',
      country: 'USA',
      occupation: 'Architect',
      salary: 95000,
      married: true,
    },
    {
      id: 13,
      name: 'Mia Davis',
      age: 22,
      gender: 'Female',
      email: 'mia.davis@example.com',
      phone: '456-789-0123',
      address: '333 Fir St',
      city: 'Opal City',
      state: 'AZ',
      zip: '85001',
      country: 'USA',
      occupation: 'Student',
      salary: 20000,
      married: false,
    },
    {
      id: 14,
      name: 'Noah Edwards',
      age: 42,
      gender: 'Male',
      email: 'noah.edwards@example.com',
      phone: '567-890-1234',
      address: '444 Spruce St',
      city: 'Midway City',
      state: 'VA',
      zip: '20101',
      country: 'USA',
      occupation: 'Doctor',
      salary: 180000,
      married: true,
    },
    {
      id: 15,
      name: 'Olivia Foster',
      age: 26,
      gender: 'Female',
      email: 'olivia.foster@example.com',
      phone: '678-901-2345',
      address: '555 Pine St',
      city: 'Fawcett City',
      state: 'MN',
      zip: '55101',
      country: 'USA',
      occupation: 'Social Worker',
      salary: 48000,
      married: false,
    },
  ];
}
