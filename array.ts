const friendSalaries: number[] = [2500, 55500, 6500, 4500];

friendSalaries.push(4512);

let maxSalary = 0;
for (const salary of friendSalaries) {
        if (maxSalary > salary) {
                maxSalary = salary;
        }
}