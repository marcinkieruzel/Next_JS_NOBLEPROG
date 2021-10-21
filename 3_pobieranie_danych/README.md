# Pobieranie danych

W folderze `__snapshots__` znajdziesz baze danych sklepu internetowego uruchom ją przy pomocy json-server

1. Stwórz routing dla ścieżek `/ssr/products` i `/ssr/products/:slug` – wyrenderuj w nich wszystkie produkty przy pomocy SSR
2. Stwórz routing dla ścieżek `/sg/products` i `/sg/products/:slug` – wyrenderuj w nich wszystkie produkty przy pomocy statycznego renderowania (użyj `fallback: blocking` )
3. Stwórz routing dla ścieżek `/isr/products` i `/isr/products/:slug` – wyrenderuj w nich wszystkie produkty przy pomocy ISR (użyj `fallback: true` ). Dodaj kolejny produkt ręcznie do pliku z danymi. Spróbuj uderzyć pod jego ścieżkę i zobacz co się wydarzy. Pamiętaj o użyciu `router.isLoading`
4. Stwórz stronę główną dla projektu. Na stronie głównej stwórz menu zawierające linki do wszystkich kategorii produktów oraz strony poszczególnych kategorii. Pobieraj dane przy pomocy swr lub react-query