define(function() {
  'use strict';

  return function(match) {
    match('', 'home#index')
    match(':daoFactory', 'daos#index')
  }
})
