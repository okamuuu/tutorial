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
  cout << "nnnyyyaaa, I'm " << name << "!!" <<endl;
}

int main()
{
  string s;
  cout << "create cat" << endl;
  cin >> s;

  Cat dora(s);
  cout << "create your cat!!" << endl;
  cout << "speak!!" << endl;

  dora.speak();
}
