# Cvičení 1 - hamburger menu

Nyní náš čeká složitější případ komunikace, kdy se předává informace směrem od dítěte k rodiči pomocí callbacku. Nejdříve si procvičíme callback bez parametrů.

Vytvořte si repozitář ze šablony cviceni-hamburger obsahující React stránku s jednoduchým hamburger menu. Prohlédněte si připravený kód.

V komponentě `App` vytvořte stav menuOpened, který bude obsahovat hodnotu true nebo false podle toho, zda má být menu otevřeno nebo zavřeno. Stav ovládejte kliknutím na tlačítko .`menu__btn.`

Dle hodnoty ve stavu `menuOpened` správně sestavte třídu pro element `.menu`. K zavření menu slouží CSS třída `menu--closed`.

Nyní budeme chtít zařídit, aby se hamburger menu zavřelo po kliknutí na libovolný odkaz. Uvnitř komponenty App tedy vytvořte callback funkci `handleSelectItem`, která změní hodnotu stavu `menuOpened` na `false`.

Chceme, aby komponenta `MenuItem` přijímala prop s názvem `onSelect`. Ta bude očekávat callback, který se zavolá, když uživatel vybere danou položku. Předejte tedy callback `handleSelectItem` všem komponentám `MenuItem` jako prop s názvem `onSelect`.
Uvnitř komponenty `MenuItem` zajistěte, aby se předaný callback zavolal při kliknutí na položku odkazu.

# Cvičení 2 - Název stránky

Pokračujte v předchozím příkladu. Nyní si vyzkoušíme callback s parametrem a budeme chtít, aby se při kliknutí na položku menu zobrazil správný název stránky.

Přidejte do komponenty `App` stav s názvem `pageTitle`, který bude představovat název aktuální stránky. Jeho výchozí hodnotu nastavte na `Domů` a použijte tento stav uvnitř elementu `h1`.
Zařiďte, aby komponenta MenuItem při volání funkce onSelect zavolala tuto funkci se vstupem, který udává název stránky, který se má zobrazit. Takto předá název stránky rodičovské komponentě.

Do funkce `handleSelectItem` přidejte parametr `page` a nastavte stav `pageTitle` na hodnotu z tohoto parametru.