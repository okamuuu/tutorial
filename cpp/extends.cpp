#include <iostream>
#include <string>
using namespace std;

class Cat
{
  string name;
public:
  Cat(string s);
  void speak() const;
};

Cat::Cat(string s) : name(s) {}

void Cat::speak() const {
  cout << "Nnnyyyaaa!!, I'm.." << name << endl;
}

class SalaryCat : public Cat
{
  int salary;
public:
  SalaryCat(string s, int x) : Cat(s), salary(x) {}
  int getSalary() const  { return salary * 12; }
}; 

int main()
{
  cout << "your name?" << endl;
  string temp;
  cin >> temp;
  cout << "your salary?" << endl;
  int salary;
  cin >> salary;
  SalaryCat dora(temp, salary);
} 
