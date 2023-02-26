#include <iostream>

using namespace std;

int main(){
	int vidas = 0;
	char letra = 'B';
	double decimal = 2.5;
	float decimal2 = 2.5;
	bool vivo = true;
	string nome = "Lucas";
	cout << "Digite o numero de Vidas";
	cin >> vidas;
	cout << "Digite uma letra";
	cin >> letra;
	cout << "Digite o seu nome";
	cin >> nome;
	cout << vidas << "\n" << letra << "\n"  << decimal << "\n"  << vivo << "\n"  << nome << "\n";
	
	return 0;
}
