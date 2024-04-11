<!DOCTYPE html>
<html>
    <head>
        <title>Auto</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <form action="info.php" method="post">
            <fieldset>
                <legend>
                    Auto
                </legend>
                <label>Marka</label>
                <input type="text" name="marka" required/>

                <label>Model</label>
                <input type="text" name="model" required/>

                <label>Rok Produkcji</label>
                <input type="date" name="rok_produkcji" required/>

                <label>Paliwo</label>
                <input
                    type="radio"
                    name="paliwo"
                    value="Benzyna"
                    required
                />Benzyna
                <input
                    type="radio"
                    name="paliwo"
                    value="Diesel"
                />Diesel
                <input
                    type="radio"
                    name="paliwo"
                    value="Elektryk"
                />Elektryk

                <label>Kolor</label>
                <input type="color" name="kolor" />

                <label>Dodatki:</label>
                <input
                    type="checkbox"
                    name="abs"
                />ABS
                <input
                    type="checkbox"
                    name="klimatyzacja"
                />Klimatyzacja
                <input
                    type="checkbox"
                    name="czujnik_parkowania"
                />Czujnik Parkowania

                <div class="submit">
                <input
                    type="submit"
                    value="Zatwierdź"
                />
                </div>
            </fieldset>
        </form>
    </body>
</html>