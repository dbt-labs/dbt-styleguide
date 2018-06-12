---
title: Mentions
type: widgets
section: typeahead
---

<label>Suggesting @mentions</label>
<textarea
	class="form-control"
	placeholder="add text and strings starting with @"
	data-suggest
	data-suggest-start="@"
	data-suggest-data="[{username: 'graniteruin', fullname: 'Molly Sutherland'},{username: 'paintinggenes', fullname: 'Donna Sutherland'},{username: 'photonlibra', fullname: 'Bella Sharp'},{username: 'scaleuk', fullname: 'Matt Hardacre'},{username: 'cameramanfestival', fullname: 'Madeleine Hart'},{username: 'skatingwebgl', fullname: 'Ava Clark'},{username: 'relateinfected', fullname: 'Ava Fisher'},{username: 'unsuitablepoisonous', fullname: 'Keith Hart'},{username: 'ductbony', fullname: 'Benjamin Anderson'},{username: 'chromesirius', fullname: 'Owen Allan'},{username: 'baskhard', fullname: 'Dominic Mitchell'},{username: 'luxuriouspouting', fullname: 'Faith Jackson'},{username: 'strudelplumose', fullname: 'Natalie Graham'},{username: 'diaminewhey', fullname: 'Amelia Ellison'},{username: 'samplespinal', fullname: 'Evan Paterson'},{username: 'originatedplenty', fullname: 'Faith Peake'},{username: 'stinkynescafe', fullname: 'Carolyn Russell'},{username: 'steamedmilkyway', fullname: 'David Vaughan'},{username: 'resultsshutdown', fullname: 'Dominic Turner'},{username: 'summerstart', fullname: 'Sue King'},{username: 'shaftangelic', fullname: 'Christian Taylor'},{username: 'exampledroning', fullname: 'Simon Ball'},{username: 'excitedjunco', fullname: 'Nathan Rutherford'},{username: 'renamezesty', fullname: 'Grace Carr'},{username: 'instanthang', fullname: 'Chloe Graham'},{username: 'diffidencetypewriter', fullname: 'Christian Hemmings'},{username: 'excellentdialect', fullname: 'Emma Slater'},{username: 'distortedboat', fullname: 'Trevor Bell'},{username: 'beggaruniform', fullname: 'Rachel Ball'},{username: 'fretalgebra', fullname: 'Victoria Henderson'}]"
	data-suggest-map="{value: item.username,text: '<strong>'+item.fullname+'</strong> <em>'+item.username+'</em>'}"
></textarea>