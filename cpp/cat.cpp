#include <iostream>
#include <string>
using namespace std;

class Cat
{
private:
  string name;
public:
  Cat(string s) {
    name = s;
  }
  void speak() {
    cout << "nnnyyaaa, I'm a " << name << "." <<endl;
  }
};

int main()
{
  Cat cat("boss");
  cout << "create your cat." <<endl;
  cout << "speak your cat" <<endl;

  cat.speak();
}

