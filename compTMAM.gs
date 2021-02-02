*programa para calcular composto de temperatura para MAM durante o PSA

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

'comp1=ave(t,t=61,t=63)'
'comp2=ave(t,t=121,t=123)'
'comp3=ave(t,t=133,t=135)'
'comp4=ave(t,t=193,t=195)'
'comp5=ave(t,t=253,t=255)'


*PSA-
'comp6=ave(t,t=229,t=231)'
'comp7=ave(t,t=361,t=363)'
'comp8=ave(t,t=365,t=367)'
'comp9=ave(t,t=433,t=435)'


'somapos=((comp1+comp2+comp3+comp4+comp5)/5)'

'somaneg=((comp6+comp7+comp8+comp9)/4))'

'colormaps -flipped -map y2b -levels -6 5 0.5'

*'d somapos'
'd somaneg'

*'draw title Anomalia da temperatura do ar 850 hPa MAM PSA+'
'draw title Anomalia da temperatura do ar 850 hPa MAM PSA-'

'draw xlab longitude'
'draw ylab latitude'

'printim tmam-850.png' 
*'printim tmam+850.png' 
