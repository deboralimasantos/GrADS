*programa para calcular composto de SON do PSA

'reinit'
'set display color white'
'set grads off'
'sdfopen t.mon.ano.celsius.nc'
'set lev 850'
'c'
'set gxout shaded'

'set lat -60 20'
'set lon -100 -30'



*PSA+
'comp1=ave(t,t=19,t=21)'
'comp2=ave(t,t=124,t=126)'
'comp3=ave(t,t=340,t=342)'
'comp4=ave(t,t=415,t=417)'


*PSA-
'comp5=ave(t,t=211,t=213)'
'comp6=ave(t,t=247,t=250)'
'comp7=ave(t,t=331,t=333)'
'comp8=ave(t,t=355,t=357)'

'somapos=((comp1+comp2+comp3+comp4)/4)'

'somaneg=((comp5+comp6+comp7+comp8)/4))'

'colormaps -flipped -map y2b -levels -6 5 0.5'

*'d somapos'
'd somaneg'

*'draw title Anomalia temperatura do ar 850 hPa SON PSA+'
'draw title Anomalia temperatura do ar 850 hPa SON PSA-'

'draw xlab longitude'
'draw ylab latitude'


*'printim tson+850.png'
'printim tson-850.png' 
