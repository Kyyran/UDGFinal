<?php

// remplit un tableau de nombre aléatoire entre bornes

function genererNumerique($nbligne, $min, $max, $nbdecimal) {

  $NumGene = array();
  for ($j = 0; $j < $nbligne; $j++) {
    $NumGene[$j] = MDGAleatoire($min, $max, $nbdecimal);
  } # fin pour
  return $NumGene;
} # fin fonction genererNumerique

?>