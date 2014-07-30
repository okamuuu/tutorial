#include <iostream>
using namespace std;

class Human
{
  int power;
public:
  Human(int x): power(x) {}
  void set_power(int x) { power = x; }
  int get_power() const { return power; }
  void hi();
};

void Human::hi()
{
  power--;
  cout << "I'm a man." << endl;
  cout << "my power is " << power << endl;
}

int main()
{
  Human *p;
  p = new Human(10);
  p->hi();
  delete p;
}


