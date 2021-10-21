# Stwórz routing aplikacji


1. Aplikacja powinna zawierać następujące ścieżki:
`/home`
`/about`
`[page]` (strona dynamiczna)
2. W komponentach reactowych użyj hooka `useRouter` – w console log podejrzyj jak wygląda obiekt routera
3. Stwórz ścieżkę `/user/:age` – pobierz parametr `:age` w komponencie React. Stwórz instrukcję warunkową, która sprawdzi czy wiek użytkownika jest większy niż 18. Jeśli tak zaprezentuj informację `Użytkownik pełnoletni` jeśli nie `Użytkownik niepełnoletni`. 
4. Stwórz route `/polska/wojewodztwo/powiat` jako dynamiczny route `/polska/[...podzial]`. Uruchom plik `poland.json` przy pomocy json-server. W każdym z routów pobierz dane na podstawie parametrów. Np. `/polska/mazowieckie/zambrowski` powinien wyświetlić informacje o danym powiecie a `/polska/mazowieckie` o wszystkich powiatach z dango wojewodztwa
5. Stwórz menu linkujące do poszczególnych wojewodztw