(function (root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory(root.etsyjs = {});
    }
}(this, function (exports) {
    'use strict';
        var api = {
        'ApiMethod': {
            'f': {
                'params': {
                    'v': 'public',
                    't': 'ParamList'
                },
                'defaults': {
                    'v': 'public',
                    't': 'ParamList'
                },
                'http_method': {
                    'v': 'public',
                    't': 'string'
                },
                'n': {
                    'v': 'public',
                    't': 'string'
                },
                'u': {
                    'v': 'public',
                    't': 'string'
                },
                't': {
                    'v': 'public',
                    't': 'string'
                },
                'v': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'getMethodTable': {
                    'u': '/',
                    'o': false
                }
            }
        },
        'Avatar': {
            'f': {
                'avatar_id': {
                    'v': 'public',
                    't': 'int'
                },
                'hex_code': {
                    'v': 'public',
                    't': 'string'
                },
                'red': {
                    'v': 'public',
                    't': 'int'
                },
                'green': {
                    'v': 'public',
                    't': 'int'
                },
                'blue': {
                    'v': 'public',
                    't': 'int'
                },
                'hue': {
                    'v': 'public',
                    't': 'int'
                },
                'saturation': {
                    'v': 'public',
                    't': 'int'
                },
                'brightness': {
                    'v': 'public',
                    't': 'int'
                },
                'is_black_and_white': {
                    'v': 'public',
                    't': 'boolean'
                },
                'creation_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'user_id': {
                    'v': 'public',
                    't': 'int'
                }
            },
            'm': {
                'uploadAvatar': {
                    'm': 'POST',
                    'u': '/users/:user_id/avatar',
                    'p': {
                        'src': { 't': 'string' },
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'image': { 't': 'image' }
                    },
                    's': 'profile_w'
                },
                'getAvatarImgSrc': {
                    'u': '/users/:user_id/avatar/src',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        }
                    },
                    'o': false
                }
            }
        },
        'BillCharge': {
            'f': {
                'bill_charge_id': {
                    's': 'billing_r',
                    't': 'int'
                },
                'creation_tsz': {
                    's': 'billing_r',
                    't': 'float'
                },
                'type_id': {
                    's': 'billing_r',
                    't': 'int'
                },
                'user_id': {
                    's': 'billing_r',
                    't': 'int'
                },
                'amount': {
                    's': 'billing_r',
                    't': 'float'
                },
                'currency_code': {
                    's': 'billing_r',
                    't': 'string'
                },
                'creation_year': {
                    's': 'billing_r',
                    't': 'int'
                },
                'creation_month': {
                    's': 'billing_r',
                    't': 'int'
                },
                'last_modified_tsz': {
                    's': 'billing_r',
                    't': 'float'
                },
                't': {
                    's': 'billing_r',
                    't': 'string'
                }
            },
            'm': {
                'getUserChargesMetadata': {
                    'u': '/users/:user_id/charges/meta',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        }
                    },
                    's': 'billing_r'
                },
                'findAllUserCharges': {
                    'u': '/users/:user_id/charges',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'sort_order': {
                            'd': 'up',
                            't': 'enum(up, down)'
                        },
                        'min_created': { 't': 'epoch' },
                        'max_created': { 't': 'epoch' }
                    },
                    's': 'billing_r'
                }
            }
        },
        'BillPayment': {
            'f': {
                'bill_payment_id': {
                    's': 'billing_r',
                    't': 'int'
                },
                'creation_tsz': {
                    's': 'billing_r',
                    't': 'float'
                },
                'type_id': {
                    's': 'billing_r',
                    't': 'int'
                },
                'user_id': {
                    's': 'billing_r',
                    't': 'int'
                },
                'amount': {
                    's': 'billing_r',
                    't': 'float'
                },
                'currency_code': {
                    's': 'billing_r',
                    't': 'string'
                },
                'creation_month': {
                    's': 'billing_r',
                    't': 'int'
                },
                'creation_year': {
                    's': 'billing_r',
                    't': 'int'
                },
                't': {
                    's': 'billing_r',
                    't': 'string'
                }
            },
            'm': {
                'findAllUserPayments': {
                    'u': '/users/:user_id/payments',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'sort_order': {
                            'd': 'up',
                            't': 'enum(up, down)'
                        },
                        'min_created': { 't': 'epoch' },
                        'max_created': { 't': 'epoch' }
                    },
                    's': 'billing_r'
                }
            }
        },
        'BillingOverview': {
            'f': {
                'is_overdue': {
                    's': 'billing_r',
                    't': 'boolean'
                },
                'currency_code': {
                    's': 'billing_r',
                    't': 'string'
                },
                'overdue_balance': {
                    's': 'billing_r',
                    't': 'float'
                },
                'balance_due': {
                    's': 'billing_r',
                    't': 'float'
                },
                'total_balance': {
                    's': 'billing_r',
                    't': 'float'
                },
                'date_due': {
                    's': 'billing_r',
                    't': 'epoch'
                },
                'date_overdue': {
                    's': 'billing_r',
                    't': 'epoch'
                }
            },
            'm': {
                'getUserBillingOverview': {
                    'u': '/users/:user_id/billing/overview',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        }
                    },
                    's': 'billing_r'
                }
            }
        },
        'Cart': {
            'f': {
                'cart_id': {
                    's': 'cart_rw',
                    't': 'int'
                },
                'shop_name': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'message_to_seller': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'destination_country_id': {
                    's': 'cart_rw',
                    't': 'int'
                },
                'coupon_code': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'currency_code': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'total': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'subtotal': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'shipping_cost': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'tax_cost': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'discount_amount': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'shipping_discount_amount': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'tax_discount_amount': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'url': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'listings': {
                    's': 'cart_rw',
                    't': 'array(CartListing)'
                },
                'shipping_option': {
                    's': 'cart_rw',
                    't': 'ShippingOption'
                }
            },
            'a': {
                'Shop': {
                    's': 'cart_rw',
                    't': 'Shop'
                },
                'Listings': {
                    's': 'cart_rw',
                    't': 'array(Listing)'
                },
                'Coupon': {
                    's': 'cart_rw',
                    't': 'Coupon'
                },
                'ShippingOptions': {
                    's': 'cart_rw',
                    't': 'array(ShippingOption)'
                }
            },
            'm': {
                'getAllUserCarts': {
                    'u': '/users/:user_id/carts',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '100',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'cart_rw'
                },
                'addToCart': {
                    'm': 'POST',
                    'u': '/users/:user_id/carts',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'quantity': {
                            'd': '1',
                            't': 'int'
                        },
                        'selected_variations': { 't': 'map(int, int)' }
                    },
                    's': 'cart_rw'
                },
                'updateCartListingQuantity': {
                    'm': 'PUT',
                    'u': '/users/:user_id/carts',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'quantity': {
                            'r': true,
                            't': 'int'
                        },
                        'listing_customization_id': {
                            'd': '0',
                            't': 'int'
                        }
                    },
                    's': 'cart_rw'
                },
                'removeCartListing': {
                    'm': 'DELETE',
                    'u': '/users/:user_id/carts',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'listing_customization_id': {
                            'd': '0',
                            't': 'int'
                        }
                    },
                    's': 'cart_rw'
                },
                'getUserCart': {
                    'u': '/users/:user_id/carts/:cart_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'cart_id': {
                            'r': true,
                            't': 'cart_id'
                        }
                    },
                    's': 'cart_rw'
                },
                'updateCart': {
                    'm': 'PUT',
                    'u': '/users/:user_id/carts/:cart_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'cart_id': {
                            'r': true,
                            't': 'cart_id'
                        },
                        'destination_country_id': { 't': 'int' },
                        'message_to_seller': { 't': 'text' },
                        'coupon_code': { 't': 'string' },
                        'shipping_option_id': { 't': 'int' }
                    },
                    's': 'cart_rw'
                },
                'deleteCart': {
                    'm': 'DELETE',
                    'u': '/users/:user_id/carts/:cart_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'cart_id': {
                            'r': true,
                            't': 'cart_id'
                        }
                    },
                    's': 'cart_rw'
                },
                'getUserCartForShop': {
                    'u': '/users/:user_id/carts/shop/:shop_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        }
                    },
                    's': 'cart_rw'
                }
            }
        },
        'CartListing': {
            'f': {
                'listing_id': {
                    's': 'cart_rw',
                    't': 'int'
                },
                'purchase_quantity': {
                    's': 'cart_rw',
                    't': 'int'
                },
                'purchase_state': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'is_digital': {
                    's': 'cart_rw',
                    't': 'boolean'
                },
                'file_data': {
                    's': 'cart_rw',
                    't': 'string'
                },
                'listing_customization_id': {
                    's': 'cart_rw',
                    't': 'int'
                },
                'variations_available': {
                    's': 'cart_rw',
                    't': 'boolean'
                },
                'has_variations': {
                    's': 'cart_rw',
                    't': 'boolean'
                },
                'selected_variations': {
                    's': 'cart_rw',
                    't': 'array(Variations_SelectedProperty)'
                }
            }
        },
        'Category': {
            'f': {
                'category_id': {
                    'v': 'public',
                    't': 'int'
                },
                'meta_title': {
                    'v': 'public',
                    't': 'string'
                },
                'meta_keywords': {
                    'v': 'public',
                    't': 'string'
                },
                'meta_description': {
                    'v': 'public',
                    't': 'string'
                },
                'page_description': {
                    'v': 'public',
                    't': 'string'
                },
                'page_title': {
                    'v': 'public',
                    't': 'string'
                },
                'category_name': {
                    'v': 'public',
                    't': 'string'
                },
                'short_name': {
                    'v': 'public',
                    't': 'string'
                },
                'long_name': {
                    'v': 'public',
                    't': 'string'
                },
                'num_children': {
                    'v': 'public',
                    't': 'int'
                },
                'n': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'getCategory': {
                    'u': '/categories/:tag',
                    'p': {
                        'tag': {
                            'r': true,
                            't': 'string'
                        }
                    },
                    'o': false
                },
                'findAllTopCategory': {
                    'u': '/taxonomy/categories',
                    'o': false
                },
                'getSubCategory': {
                    'u': '/categories/:tag/:subtag',
                    'p': {
                        'tag': {
                            'r': true,
                            't': 'string'
                        },
                        'subtag': {
                            'r': true,
                            't': 'string'
                        }
                    },
                    'o': false
                },
                'getSubSubCategory': {
                    'u': '/categories/:tag/:subtag/:subsubtag',
                    'p': {
                        'tag': {
                            'r': true,
                            't': 'string'
                        },
                        'subtag': {
                            'r': true,
                            't': 'string'
                        },
                        'subsubtag': {
                            'r': true,
                            't': 'string'
                        }
                    },
                    'o': false
                },
                'findAllTopCategoryChildren': {
                    'u': '/taxonomy/categories/:tag',
                    'p': {
                        'tag': {
                            'r': true,
                            't': 'string'
                        }
                    },
                    'o': false
                },
                'findAllSubCategoryChildren': {
                    'u': '/taxonomy/categories/:tag/:subtag',
                    'p': {
                        'tag': {
                            'r': true,
                            't': 'string'
                        },
                        'subtag': {
                            'r': true,
                            't': 'string'
                        }
                    },
                    'o': false
                }
            }
        },
        'Country': {
            'f': {
                'country_id': {
                    'v': 'public',
                    't': 'int'
                },
                'iso_country_code': {
                    'v': 'public',
                    't': 'string'
                },
                'world_bank_country_code': {
                    'v': 'public',
                    't': 'string'
                },
                'slug': {
                    'v': 'public',
                    't': 'string'
                },
                'lat': {
                    'v': 'public',
                    't': 'float'
                },
                'lon': {
                    'v': 'public',
                    't': 'float'
                },
                'n': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'findAllCountry': {
                    'u': '/countries',
                    'o': false
                },
                'getCountry': {
                    'u': '/countries/:country_id',
                    'p': {
                        'country_id': {
                            'r': true,
                            't': 'array(int)'
                        }
                    },
                    'o': false
                },
                'findByIsoCode': {
                    'u': '/countries/iso/:iso_code',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'iso_code': {
                            'r': true,
                            't': 'string'
                        }
                    },
                    'o': false
                }
            }
        },
        'Coupon': {
            'f': {
                'coupon_id': {
                    's': 'shops_rw',
                    't': 'int'
                },
                'coupon_code': {
                    's': 'shops_rw',
                    't': 'string'
                },
                'seller_active': {
                    's': 'shops_rw',
                    't': 'boolean'
                },
                'pct_discount': {
                    's': 'shops_rw',
                    't': 'int'
                },
                'free_shipping': {
                    's': 'shops_rw',
                    't': 'boolean'
                },
                'domestic_only': {
                    's': 'shops_rw',
                    't': 'boolean'
                },
                'currency_code': {
                    's': 'shops_rw',
                    't': 'string'
                },
                'fixed_discount': {
                    's': 'shops_rw',
                    't': 'string'
                },
                'minimum_purchase_price': {
                    's': 'shops_rw',
                    't': 'string'
                },
                'expiration_date': {
                    's': 'shops_rw',
                    't': 'int'
                },
                'coupon_type': {
                    's': 'shops_rw',
                    't': 'string'
                }
            },
            'm': {
                'findAllShopCoupons': {
                    'u': '/shops/:shop_id/coupons',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        }
                    },
                    's': 'shops_rw'
                },
                'createCoupon': {
                    'm': 'POST',
                    'u': '/shops/:shop_id/coupons',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'coupon_code': {
                            'r': true,
                            't': 'string'
                        },
                        'pct_discount': { 't': 'int' },
                        'seller_active': {
                            'd': 'false',
                            't': 'boolean'
                        },
                        'free_shipping': {
                            'd': 'false',
                            't': 'boolean'
                        },
                        'domestic_only': {
                            'd': 'false',
                            't': 'boolean'
                        },
                        'currency_code': {
                            'd': 'USD',
                            't': 'string'
                        },
                        'fixed_discount': { 't': 'string' },
                        'minimum_purchase_price': { 't': 'string' },
                        'expiration_date': { 't': 'int' }
                    },
                    's': 'shops_rw'
                },
                'findCoupon': {
                    'u': '/shops/:shop_id/coupons/:coupon_id',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'coupon_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'shops_rw'
                },
                'updateCoupon': {
                    'm': 'PUT',
                    'u': '/shops/:shop_id/coupons/:coupon_id',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'coupon_id': {
                            'r': true,
                            't': 'int'
                        },
                        'seller_active': {
                            'd': 'false',
                            't': 'boolean'
                        }
                    },
                    's': 'shops_rw'
                },
                'deleteCoupon': {
                    'm': 'DELETE',
                    'u': '/shops/:shop_id/coupons/:coupon_id',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'coupon_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'shops_rw'
                }
            }
        },
        'DataType': {
            'f': {
                'values': {
                    'v': 'public',
                    't': 'string'
                },
                't': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'describeOccasionEnum': {
                    'u': '/types/enum/occasion',
                    'o': false
                },
                'describeRecipientEnum': {
                    'u': '/types/enum/recipient',
                    'o': false
                },
                'describeWhenMadeEnum': {
                    'u': '/types/enum/when_made',
                    'p': { 'include_formatted': { 't': 'boolean' } },
                    'o': false
                },
                'describeWhoMadeEnum': {
                    'u': '/types/enum/who_made',
                    'o': false
                }
            }
        },
        'FavoriteListing': {
            'f': {
                'listing_id': {
                    'v': 'public',
                    't': 'int'
                },
                'user_id': {
                    'v': 'public/private',
                    's': 'favorites_rw',
                    't': 'int'
                },
                'listing_state': {
                    'v': 'public',
                    't': 'string'
                },
                'create_date': {
                    'v': 'public',
                    't': 'int'
                }
            },
            'a': {
                'User': {
                    'v': 'public/private',
                    's': 'favorites_rw',
                    't': 'User'
                },
                'Listing': {
                    'v': 'public',
                    't': 'Listing'
                }
            },
            'm': {
                'findAllListingFavoredBy': {
                    'u': '/listings/:listing_id/favored-by',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findAllUserFavoriteListings': {
                    'u': '/users/:user_id/favorites/listings',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findUserFavoriteListings': {
                    'u': '/users/:user_id/favorites/listings/:listing_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    'o': false
                },
                'createUserFavoriteListings': {
                    'm': 'POST',
                    'u': '/users/:user_id/favorites/listings/:listing_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'favorites_rw'
                },
                'deleteUserFavoriteListings': {
                    'm': 'DELETE',
                    'u': '/users/:user_id/favorites/listings/:listing_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'favorites_rw'
                }
            }
        },
        'FavoriteUser': {
            'f': {
                'user_id': {
                    'v': 'public/private',
                    's': 'favorites_rw',
                    't': 'int'
                },
                'favorite_user_id': {
                    'v': 'public',
                    't': 'int'
                },
                'target_user_id': {
                    'v': 'public',
                    't': 'int'
                },
                'creation_tsz': {
                    'v': 'public',
                    't': 'float'
                }
            },
            'a': {
                'User': {
                    'v': 'public/private',
                    's': 'favorites_rw',
                    't': 'User'
                },
                'TargetUser': {
                    'v': 'public',
                    't': 'User'
                }
            },
            'm': {
                'findAllUserFavoredBy': {
                    'u': '/users/:user_id/favored-by',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findAllUserFavoriteUsers': {
                    'u': '/users/:user_id/favorites/users',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findUserFavoriteUsers': {
                    'u': '/users/:user_id/favorites/users/:target_user_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'target_user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        }
                    },
                    'o': false
                },
                'createUserFavoriteUsers': {
                    'm': 'POST',
                    'u': '/users/:user_id/favorites/users/:target_user_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'target_user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        }
                    },
                    's': 'favorites_rw'
                },
                'deleteUserFavoriteUsers': {
                    'm': 'DELETE',
                    'u': '/users/:user_id/favorites/users/:target_user_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'target_user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        }
                    },
                    's': 'favorites_rw'
                }
            }
        },
        'FeaturedTreasury': {
            'f': {
                'treasury_key': {
                    'v': 'public',
                    't': 'string'
                },
                'treasury_id': {
                    'v': 'public',
                    't': 'int'
                },
                'treasury_owner_id': {
                    'v': 'public',
                    't': 'int'
                },
                'url': {
                    'v': 'public',
                    't': 'string'
                },
                'region': {
                    'v': 'public',
                    't': 'string'
                },
                'active_date': {
                    'v': 'public',
                    't': 'float'
                }
            },
            'm': {
                'findAllFeaturedTreasuries': {
                    'u': '/featured_treasuries',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'region': {
                            'd': '__ALL_REGIONS__',
                            't': 'region'
                        }
                    },
                    'o': false
                },
                'getFeaturedTreasuryById': {
                    'u': '/featured_treasuries/:featured_treasury_id',
                    'p': {
                        'featured_treasury_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    'o': false
                },
                'findAllFeaturedTreasuriesByOwner': {
                    'u': '/featured_treasuries/owner/:owner_id',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'owner_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    'o': false
                }
            }
        },
        'Feedback': {
            'f': {
                'feedback_id': {
                    'v': 'public',
                    't': 'int'
                },
                'transaction_id': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'int'
                },
                'creator_user_id': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'int'
                },
                'target_user_id': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'int'
                },
                'seller_user_id': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'int'
                },
                'buyer_user_id': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'int'
                },
                'creation_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'message': {
                    'v': 'public',
                    't': 'string'
                },
                'value': {
                    'v': 'public',
                    't': 'int'
                },
                'image_feedback_id': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'int'
                },
                'image_url_25x25': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'string'
                },
                'image_url_155x125': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'string'
                },
                'image_url_fullxfull': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'string'
                }
            },
            'a': {
                'Buyer': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'User'
                },
                'Seller': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'User'
                },
                'Author': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'User'
                },
                'Subject': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'User'
                },
                'Transaction': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'Transaction'
                },
                'Listing': {
                    'v': 'public/private',
                    's': 'feedback_r',
                    't': 'Listing'
                }
            },
            'm': {
                'findAllUserFeedbackAsAuthor': {
                    'u': '/users/:user_id/feedback/as-author',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findAllUserFeedbackAsBuyer': {
                    'u': '/users/:user_id/feedback/as-buyer',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findAllUserFeedbackAsSeller': {
                    'u': '/users/:user_id/feedback/as-seller',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findAllUserFeedbackAsSubject': {
                    'u': '/users/:user_id/feedback/as-subject',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findAllFeedbackFromBuyers': {
                    'u': '/users/:user_id/feedback/from-buyers',
                    'p': {
                        'user_id': { 't': 'user_id_or_name' },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findAllFeedbackFromSellers': {
                    'u': '/users/:user_id/feedback/from-sellers',
                    'p': {
                        'user_id': { 't': 'user_id_or_name' },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                }
            }
        },
        'FeedbackInfo': {
            'f': {
                'count': {
                    'v': 'public',
                    't': 'int'
                },
                'score': {
                    'v': 'public',
                    't': 'int'
                }
            }
        },
        'ForumPost': {
            'f': {
                'thread_id': {
                    'v': 'public',
                    't': 'int'
                },
                'post_id': {
                    'v': 'public',
                    't': 'int'
                },
                'post': {
                    'v': 'public',
                    't': 'string'
                },
                'user_id': {
                    'v': 'public',
                    't': 'string'
                },
                'last_edit_time': {
                    'v': 'public',
                    't': 'int'
                },
                'create_date': {
                    'v': 'public',
                    't': 'int'
                }
            },
            'm': {
                'findTreasuryComments': {
                    'u': '/treasuries/:treasury_key/comments',
                    'p': {
                        'treasury_key': {
                            'r': true,
                            't': 'treasury_id'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'postTreasuryComment': {
                    'm': 'POST',
                    'u': '/treasuries/:treasury_key/comments',
                    'p': {
                        'message': {
                            'r': true,
                            't': 'forum_post'
                        }
                    },
                    's': 'treasury_w'
                },
                'deleteTreasuryComment': {
                    'm': 'DELETE',
                    'u': '/treasuries/:treasury_key/comments/:comment_id',
                    's': 'treasury_w'
                }
            }
        },
        'Guest': {
            'f': {
                'guest_id': {
                    'v': 'public',
                    't': 'guest_id'
                },
                'checkout_url': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'getGuest': {
                    'u': '/guests/:guest_id',
                    'p': {
                        'guest_id': {
                            'r': true,
                            't': 'guest_id'
                        }
                    },
                    'o': false
                },
                'generateGuest': {
                    'u': '/guests/generator',
                    'o': false
                },
                'claimGuest': {
                    'm': 'POST',
                    'u': '/guests/:guest_id/claim',
                    'p': {
                        'guest_id': {
                            'r': true,
                            't': 'guest_id'
                        }
                    },
                    's': 'cart_rw'
                },
                'mergeGuest': {
                    'm': 'POST',
                    'u': '/guests/:guest_id/merge',
                    'p': {
                        'guest_id': {
                            'r': true,
                            't': 'guest_id'
                        },
                        'target_guest_id': {
                            'r': true,
                            't': 'guest_id'
                        }
                    }
                }
            }
        },
        'GuestCart': {
            'f': {
                'cart_id': {
                    'v': 'public',
                    't': 'int'
                },
                'shop_name': {
                    'v': 'public',
                    't': 'string'
                },
                'message_to_seller': {
                    'v': 'public',
                    't': 'string'
                },
                'destination_country_id': {
                    'v': 'public',
                    't': 'int'
                },
                'coupon_code': {
                    'v': 'public',
                    't': 'string'
                },
                'currency_code': {
                    'v': 'public',
                    't': 'string'
                },
                'total': {
                    'v': 'public',
                    't': 'string'
                },
                'subtotal': {
                    'v': 'public',
                    't': 'string'
                },
                'shipping_cost': {
                    'v': 'public',
                    't': 'string'
                },
                'tax_cost': {
                    'v': 'public',
                    't': 'string'
                },
                'discount_amount': {
                    'v': 'public',
                    't': 'string'
                },
                'shipping_discount_amount': {
                    'v': 'public',
                    't': 'string'
                },
                'tax_discount_amount': {
                    'v': 'public',
                    't': 'string'
                },
                'url': {
                    'v': 'public',
                    't': 'string'
                },
                'listings': {
                    'v': 'public',
                    't': 'array(CartListing)'
                },
                'shipping_option': {
                    'v': 'public',
                    't': 'ShippingOption'
                }
            },
            'a': {
                'Shop': {
                    'v': 'public',
                    't': 'Shop'
                },
                'Listings': {
                    'v': 'public',
                    't': 'array(Listing)'
                },
                'Coupon': {
                    'v': 'public',
                    't': 'Coupon'
                },
                'ShippingOptions': {
                    'v': 'public',
                    't': 'array(ShippingOption)'
                }
            },
            'm': {
                'findAllGuestCarts': {
                    'u': '/guests/:guest_id/carts',
                    'p': {
                        'guest_id': {
                            'r': true,
                            't': 'guest_id'
                        }
                    },
                    'o': false
                },
                'addToGuestCart': {
                    'm': 'POST',
                    'u': '/guests/:guest_id/carts',
                    'p': {
                        'guest_id': {
                            'r': true,
                            't': 'guest_id'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'quantity': {
                            'd': '1',
                            't': 'int'
                        },
                        'selected_variations': { 't': 'map(int, int)' }
                    },
                    'o': false
                },
                'updateGuestCartListingQuantity': {
                    'm': 'PUT',
                    'u': '/guests/:guest_id/carts',
                    'p': {
                        'guest_id': {
                            'r': true,
                            't': 'guest_id'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'quantity': {
                            'r': true,
                            't': 'int'
                        },
                        'listing_customization_id': {
                            'd': '0',
                            't': 'int'
                        }
                    },
                    'o': false
                },
                'removeGuestCartListing': {
                    'm': 'DELETE',
                    'u': '/guests/:guest_id/carts',
                    'p': {
                        'guest_id': {
                            'r': true,
                            't': 'guest_id'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'listing_customization_id': {
                            'd': '0',
                            't': 'int'
                        }
                    },
                    'o': false
                },
                'findGuestCart': {
                    'u': '/guests/:guest_id/carts/:cart_id',
                    'p': {
                        'guest_id': {
                            'r': true,
                            't': 'guest_id'
                        },
                        'cart_id': {
                            'r': true,
                            't': 'cart_id'
                        }
                    },
                    'o': false
                },
                'updateGuestCart': {
                    'm': 'PUT',
                    'u': '/guests/:guest_id/carts/:cart_id',
                    'p': {
                        'guest_id': {
                            'r': true,
                            't': 'guest_id'
                        },
                        'cart_id': {
                            'r': true,
                            't': 'cart_id'
                        },
                        'destination_country_id': { 't': 'int' },
                        'message_to_seller': { 't': 'string' },
                        'coupon_code': { 't': 'string' }
                    },
                    'o': false
                },
                'deleteGuestCart': {
                    'm': 'DELETE',
                    'u': '/guests/:guest_id/carts/:cart_id',
                    'p': {
                        'guest_id': {
                            'r': true,
                            't': 'guest_id'
                        },
                        'cart_id': {
                            'r': true,
                            't': 'cart_id'
                        }
                    },
                    'o': false
                }
            }
        },
        'ImageType': {
            'f': {
                'code': {
                    'v': 'public',
                    't': 'string'
                },
                'desc': {
                    'v': 'public',
                    't': 'string'
                },
                'sizes': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'listImageTypes': {
                    'u': '/image_types',
                    'o': false
                }
            }
        },
        'Ledger': {
            'f': {
                'ledger_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'shop_id': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'currency': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'create_date': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'update_date': {
                    's': 'transactions_r',
                    't': 'int'
                }
            },
            'm': {
                'findLedger': {
                    'u': '/shops/:shop_id/ledger/',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        }
                    },
                    's': 'transactions_r'
                }
            }
        },
        'LedgerEntry': {
            'f': {
                'ledger_entry_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'ledger_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'sequence': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'credit_amount': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'debit_amount': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'entry_type': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'reference_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'running_balance': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'create_date': {
                    's': 'transactions_r',
                    't': 'int'
                }
            },
            'm': {
                'findLedgerEntries': {
                    'u': '/shops/:shop_id/ledger/entries',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'min_created': { 't': 'epoch' },
                        'max_created': { 't': 'epoch' },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'transactions_r'
                }
            }
        },
        'Listing': {
            'f': {
                'listing_id': {
                    'v': 'public',
                    't': 'int'
                },
                'state': {
                    'v': 'public',
                    't': 'string'
                },
                'user_id': {
                    'v': 'public',
                    't': 'int'
                },
                'category_id': {
                    'v': 'public',
                    't': 'int'
                },
                'title': {
                    'v': 'public',
                    't': 'string'
                },
                'creation_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'ending_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'original_creation_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'last_modified_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'price': {
                    'v': 'public',
                    't': 'string'
                },
                'currency_code': {
                    'v': 'public',
                    't': 'string'
                },
                'quantity': {
                    'v': 'public',
                    't': 'int'
                },
                'tags': {
                    'v': 'public',
                    't': 'string'
                },
                'category_path': {
                    'v': 'public',
                    't': 'string'
                },
                'category_path_ids': {
                    'v': 'public',
                    't': 'int'
                },
                'materials': {
                    'v': 'public',
                    't': 'string'
                },
                'shop_section_id': {
                    'v': 'public',
                    't': 'int'
                },
                'featured_rank': {
                    'v': 'public',
                    't': 'featured_rank'
                },
                'state_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'url': {
                    'v': 'public',
                    't': 'string'
                },
                'views': {
                    'v': 'public',
                    't': 'int'
                },
                'num_favorers': {
                    'v': 'public',
                    't': 'int'
                },
                'shipping_template_id': {
                    'v': 'public',
                    't': 'int'
                },
                'shipping_profile_id': {
                    'v': 'public',
                    't': 'int'
                },
                'processing_min': {
                    'v': 'public',
                    't': 'int'
                },
                'processing_max': {
                    'v': 'public',
                    't': 'int'
                },
                'who_made': {
                    'v': 'public',
                    't': 'enum'
                },
                'is_supply': {
                    'v': 'public',
                    't': 'boolean'
                },
                'when_made': {
                    'v': 'public',
                    't': 'enum'
                },
                'is_private': {
                    'v': 'public',
                    't': 'boolean'
                },
                'recipient': {
                    'v': 'public',
                    't': 'enum'
                },
                'occasion': {
                    'v': 'public',
                    't': 'enum'
                },
                'style': {
                    'v': 'public',
                    't': 'string'
                },
                'non_taxable': {
                    'v': 'public',
                    't': 'boolean'
                },
                'is_customizable': {
                    'v': 'public',
                    't': 'boolean'
                },
                'is_digital': {
                    'v': 'public',
                    't': 'boolean'
                },
                'file_data': {
                    'v': 'public',
                    't': 'string'
                },
                'has_variations': {
                    'v': 'public',
                    't': 'boolean'
                },
                'language': {
                    'v': 'public',
                    't': 'language'
                }
            },
            'a': {
                'User': {
                    'v': 'public',
                    't': 'User'
                },
                'Shop': {
                    'v': 'public',
                    't': 'Shop'
                },
                'Section': {
                    'v': 'public',
                    't': 'ShopSection'
                },
                'Images': {
                    'v': 'public',
                    't': 'array(ListingImage)'
                },
                'MainImage': {
                    'v': 'public',
                    't': 'ListingImage'
                },
                'ShippingInfo': {
                    'v': 'public',
                    't': 'array(ShippingInfo)'
                },
                'ShippingTemplate': {
                    'v': 'public',
                    't': 'ShippingTemplate'
                },
                'ShippingUpgrades': {
                    'v': 'public',
                    't': 'array(ShippingUpgrade)'
                },
                'PaymentInfo': {
                    'v': 'public',
                    't': 'array(PaymentTemplate)'
                },
                'Translations': {
                    'v': 'public',
                    't': 'array(ListingTranslation)'
                },
                'Manufacturers': {
                    'v': 'public',
                    't': 'array(Manufacturer)'
                },
                'Variations': {
                    'v': 'public',
                    't': 'array(Variations_Property)'
                }
            },
            'm': {
                'createListing': {
                    'm': 'POST',
                    'u': '/listings',
                    'p': {
                        'quantity': {
                            'r': true,
                            't': 'int'
                        },
                        'title': {
                            'r': true,
                            't': 'string'
                        },
                        'price': {
                            'r': true,
                            't': 'float'
                        },
                        'materials': { 't': 'array(string)' },
                        'shipping_template_id': { 't': 'int' },
                        'shop_section_id': { 't': 'int' },
                        'image_ids': { 't': 'array(int)' },
                        'is_customizable': { 't': 'boolean' },
                        'non_taxable': { 't': 'boolean' },
                        'image': { 't': 'image' },
                        'state': {
                            'd': 'active',
                            't': 'enum(active, draft)'
                        },
                        'processing_min': { 't': 'int' },
                        'processing_max': { 't': 'int' },
                        'category_id': {
                            'r': true,
                            't': 'int'
                        },
                        'tags': { 't': 'array(string)' },
                        'who_made': {
                            'r': true,
                            't': 'enum(i_did, collective, someone_else)'
                        },
                        'is_supply': {
                            'r': true,
                            't': 'boolean'
                        },
                        'when_made': {
                            'r': true,
                            't': 'enum(made_to_order, 2010_2014, 2000_2009, 1995_1999, before_1995, 1990_1994, 1980s, 1970s, 1960s, 1950s, 1940s, 1930s, 1920s, 1910s, 1900s, 1800s, 1700s, before_1700)'
                        },
                        'recipient': { 't': 'enum(men, women, unisex_adults, teen_boys, teen_girls, teens, boys, girls, children, baby_boys, baby_girls, babies, birds, cats, dogs, pets)' },
                        'occasion': { 't': 'enum(anniversary, baptism, bar_or_bat_mitzvah, birthday, canada_day, chinese_new_year, cinco_de_mayo, confirmation, christmas, day_of_the_dead, easter, eid, engagement, fathers_day, get_well, graduation, halloween, hanukkah, housewarming, kwanzaa, prom, july_4th, mothers_day, new_baby, new_years, quinceanera, retirement, st_patricks_day, sweet_16, sympathy, thanksgiving, valentines, wedding)' },
                        'style': { 't': 'array(string)' }
                    },
                    's': 'listings_w'
                },
                'findAllFeaturedListings': {
                    'u': '/featured_treasuries/listings',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'region': {
                            'd': '__ALL_REGIONS__',
                            't': 'region'
                        }
                    },
                    'o': false
                },
                'getListing': {
                    'u': '/listings/:listing_id',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'array(int)'
                        }
                    },
                    'o': false
                },
                'updateListing': {
                    'm': 'PUT',
                    'u': '/listings/:listing_id',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'quantity': { 't': 'int' },
                        'title': { 't': 'string' },
                        'price': { 't': 'float' },
                        'wholesale_price': { 't': 'float' },
                        'materials': { 't': 'array(string)' },
                        'renew': { 't': 'boolean' },
                        'shipping_template_id': { 't': 'int' },
                        'shop_section_id': { 't': 'int' },
                        'state': {
                            'd': 'active',
                            't': 'enum(active, inactive, draft)'
                        },
                        'image_ids': { 't': 'array(int)' },
                        'is_customizable': { 't': 'boolean' },
                        'non_taxable': { 't': 'boolean' },
                        'category_id': { 't': 'int' },
                        'tags': { 't': 'array(string)' },
                        'who_made': { 't': 'enum(i_did, collective, someone_else)' },
                        'is_supply': { 't': 'boolean' },
                        'when_made': { 't': 'enum(made_to_order, 2010_2014, 2000_2009, 1995_1999, before_1995, 1990_1994, 1980s, 1970s, 1960s, 1950s, 1940s, 1930s, 1920s, 1910s, 1900s, 1800s, 1700s, before_1700)' },
                        'recipient': { 't': 'enum(men, women, unisex_adults, teen_boys, teen_girls, teens, boys, girls, children, baby_boys, baby_girls, babies, birds, cats, dogs, pets)' },
                        'occasion': { 't': 'enum(anniversary, baptism, bar_or_bat_mitzvah, birthday, canada_day, chinese_new_year, cinco_de_mayo, confirmation, christmas, day_of_the_dead, easter, eid, engagement, fathers_day, get_well, graduation, halloween, hanukkah, housewarming, kwanzaa, prom, july_4th, mothers_day, new_baby, new_years, quinceanera, retirement, st_patricks_day, sweet_16, sympathy, thanksgiving, valentines, wedding)' },
                        'style': { 't': 'array(string)' },
                        'processing_min': { 't': 'int' },
                        'processing_max': { 't': 'int' },
                        'featured_rank': { 't': 'featured_rank' }
                    },
                    's': 'listings_w'
                },
                'deleteListing': {
                    'm': 'DELETE',
                    'u': '/listings/:listing_id',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_d'
                },
                'findAllListingActive': {
                    'u': '/listings/active',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'keywords': { 't': 'text' },
                        'sort_on': {
                            'd': 'created',
                            't': 'enum(created, price, score)'
                        },
                        'sort_order': {
                            'd': 'down',
                            't': 'enum(up, down)'
                        },
                        'min_price': { 't': 'float' },
                        'max_price': { 't': 'float' },
                        'color': { 't': 'color_triplet' },
                        'color_accuracy': {
                            'd': '0',
                            't': 'color_wiggle'
                        },
                        'tags': { 't': 'array(string)' },
                        'category': { 't': 'category' },
                        'location': { 't': 'string' },
                        'lat': { 't': 'latitude' },
                        'lon': { 't': 'longitude' },
                        'region': { 't': 'region' },
                        'geo_level': {
                            'd': 'city',
                            't': 'enum(city, state, country)'
                        },
                        'accepts_gift_cards': {
                            'd': 'false',
                            't': 'boolean'
                        },
                        'translate_keywords': {
                            'd': 'false',
                            't': 'boolean'
                        }
                    },
                    'o': false
                },
                'getInterestingListings': {
                    'u': '/listings/interesting',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'getTrendingListings': {
                    'u': '/listings/trending',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findBrowseSegmentListings': {
                    'u': '/segments/listings',
                    'p': {
                        'path': {
                            'r': true,
                            't': 'string'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'keywords': { 't': 'text' },
                        'sort_on': {
                            'd': 'created',
                            't': 'enum(created, price, score)'
                        },
                        'sort_order': {
                            'd': 'down',
                            't': 'enum(up, down)'
                        },
                        'min_price': { 't': 'float' },
                        'max_price': { 't': 'float' },
                        'ship_to': { 't': 'string' },
                        'location': { 't': 'string' },
                        'lat': { 't': 'latitude' },
                        'lon': { 't': 'longitude' },
                        'geo_level': {
                            'd': 'city',
                            't': 'enum(city, state, country)'
                        },
                        'accepts_gift_cards': {
                            'd': 'false',
                            't': 'boolean'
                        }
                    },
                    'o': false
                },
                'findAllListingsForFeaturedTreasuryId': {
                    'u': '/featured_treasuries/:featured_treasury_id/listings',
                    'p': {
                        'featured_treasury_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    'o': false
                },
                'findAllActiveListingsForFeaturedTreasuryId': {
                    'u': '/featured_treasuries/:featured_treasury_id/listings/active',
                    'p': {
                        'featured_treasury_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    'o': false
                },
                'findAllCurrentFeaturedListings': {
                    'u': '/featured_treasuries/listings/homepage_current',
                    'p': {
                        'region': {
                            'd': 'US',
                            't': 'region'
                        }
                    },
                    'o': false
                },
                'findAllReceiptListings': {
                    'u': '/receipts/:receipt_id/listings',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'receipt_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'transactions_r'
                },
                'findAllShopListingsActive': {
                    'u': '/shops/:shop_id/listings/active',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'keywords': { 't': 'string' },
                        'sort_on': {
                            'd': 'created',
                            't': 'enum(created, price, score)'
                        },
                        'sort_order': {
                            'd': 'down',
                            't': 'enum(up, down)'
                        },
                        'min_price': { 't': 'float' },
                        'max_price': { 't': 'float' },
                        'color': { 't': 'color_triplet' },
                        'color_accuracy': {
                            'd': '0',
                            't': 'color_wiggle'
                        },
                        'tags': { 't': 'array(string)' },
                        'category': { 't': 'category' },
                        'translate_keywords': {
                            'd': 'false',
                            't': 'boolean'
                        },
                        'include_private': {
                            'd': '0',
                            't': 'boolean'
                        }
                    },
                    'o': false
                },
                'findAllShopListingsDraft': {
                    'u': '/shops/:shop_id/listings/draft',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'listings_r'
                },
                'findAllShopListingsExpired': {
                    'u': '/shops/:shop_id/listings/expired',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'listings_r'
                },
                'getShopListingExpired': {
                    'u': '/shops/:shop_id/listings/expired/:listing_id',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_r'
                },
                'findAllShopListingsFeatured': {
                    'u': '/shops/:shop_id/listings/featured',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findAllShopListingsInactive': {
                    'u': '/shops/:shop_id/listings/inactive',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'listings_r'
                },
                'getShopListingInactive': {
                    'u': '/shops/:shop_id/listings/inactive/:listing_id',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_r'
                },
                'findAllShopSectionListings': {
                    'u': '/shops/:shop_id/sections/:shop_section_id/listings',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'shop_section_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    'o': false
                },
                'findAllShopSectionListingsActive': {
                    'u': '/shops/:shop_id/sections/:shop_section_id/listings/active',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'shop_section_id': {
                            'r': true,
                            't': 'array(int)'
                        },
                        'sort_on': {
                            'd': 'created',
                            't': 'enum(created, price)'
                        },
                        'sort_order': {
                            'd': 'down',
                            't': 'enum(up, down)'
                        }
                    },
                    'o': false
                },
                'findAllCartListings': {
                    'u': '/users/:user_id/carts/:cart_id/listings',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'cart_id': {
                            'r': true,
                            't': 'cart_id'
                        }
                    },
                    's': 'cart_rw'
                }
            }
        },
        'ListingFile': {
            'f': {
                'listing_file_id': {
                    'v': 'public',
                    't': 'int'
                },
                'listing_id': {
                    'v': 'public',
                    't': 'int'
                },
                'rank': {
                    'v': 'public',
                    't': 'int'
                },
                'filename': {
                    'v': 'public',
                    't': 'string'
                },
                'filesize': {
                    'v': 'public',
                    't': 'string'
                },
                'size_bytes': {
                    'v': 'public',
                    't': 'int'
                },
                'filetype': {
                    'v': 'public',
                    't': 'string'
                },
                'create_date': {
                    'v': 'public',
                    't': 'int'
                }
            },
            'm': {
                'findAllListingFiles': {
                    'u': '/listings/:listing_id/files',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_r'
                },
                'uploadListingFile': {
                    'm': 'POST',
                    'u': '/listings/:listing_id/files',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'listing_file_id': { 't': 'int' },
                        'file': { 't': 'imagefile' },
                        'rank': {
                            'd': '1',
                            't': 'int'
                        },
                        'n': { 't': 'string' }
                    },
                    's': 'listings_w'
                },
                'findListingFile': {
                    'u': '/listings/:listing_id/files/:listing_file_id',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'listing_file_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_r'
                },
                'deleteListingFile': {
                    'm': 'DELETE',
                    'u': '/listings/:listing_id/files/:listing_file_id',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'listing_file_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                }
            }
        },
        'ListingImage': {
            'f': {
                'listing_image_id': {
                    'v': 'public',
                    't': 'int'
                },
                'hex_code': {
                    'v': 'public',
                    't': 'string'
                },
                'red': {
                    'v': 'public',
                    't': 'int'
                },
                'green': {
                    'v': 'public',
                    't': 'int'
                },
                'blue': {
                    'v': 'public',
                    't': 'int'
                },
                'hue': {
                    'v': 'public',
                    't': 'int'
                },
                'saturation': {
                    'v': 'public',
                    't': 'int'
                },
                'brightness': {
                    'v': 'public',
                    't': 'int'
                },
                'is_black_and_white': {
                    'v': 'public',
                    't': 'boolean'
                },
                'creation_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'listing_id': {
                    'v': 'public',
                    't': 'int'
                },
                'rank': {
                    'v': 'public',
                    't': 'int'
                },
                'url_75x75': {
                    'v': 'public',
                    't': 'string'
                },
                'url_170x135': {
                    'v': 'public',
                    't': 'string'
                },
                'url_570xN': {
                    'v': 'public',
                    't': 'string'
                },
                'url_fullxfull': {
                    'v': 'public',
                    't': 'string'
                },
                'full_height': {
                    'v': 'public',
                    't': 'int'
                },
                'full_width': {
                    'v': 'public',
                    't': 'int'
                }
            },
            'a': {
                'Listing': {
                    'v': 'public',
                    't': 'Listing'
                }
            },
            'm': {
                'findAllListingImages': {
                    'u': '/listings/:listing_id/images',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    'o': false
                },
                'uploadListingImage': {
                    'm': 'POST',
                    'u': '/listings/:listing_id/images',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'listing_image_id': { 't': 'int' },
                        'image': { 't': 'imagefile' },
                        'rank': {
                            'd': '1',
                            't': 'int'
                        },
                        'overwrite': {
                            'd': '0',
                            't': 'boolean'
                        }
                    },
                    's': 'listings_w'
                },
                'getImage_Listing': {
                    'u': '/listings/:listing_id/images/:listing_image_id',
                    'p': {
                        'listing_image_id': {
                            'r': true,
                            't': 'array(int)'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    'o': false
                },
                'deleteListingImage': {
                    'm': 'DELETE',
                    'u': '/listings/:listing_id/images/:listing_image_id',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'listing_image_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                }
            }
        },
        'ListingTranslation': {
            'f': {
                'listing_id': {
                    'v': 'public',
                    't': 'int'
                },
                'language': {
                    'v': 'public',
                    't': 'language'
                },
                'title': {
                    'v': 'public',
                    't': 'string'
                },
                'tags': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'getListingTranslation': {
                    'u': '/listings/:listing_id/translations/:language',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        }
                    },
                    'o': false
                },
                'createListingTranslation': {
                    'm': 'POST',
                    'u': '/listings/:listing_id/translations/:language',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        },
                        'title': { 't': 'string' },
                        'tags': { 't': 'array(string)' }
                    },
                    's': 'listings_w'
                },
                'updateListingTranslation': {
                    'm': 'PUT',
                    'u': '/listings/:listing_id/translations/:language',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        },
                        'title': { 't': 'string' },
                        'tags': { 't': 'array(string)' }
                    },
                    's': 'listings_w'
                },
                'deleteListingTranslation': {
                    'm': 'DELETE',
                    'u': '/listings/:listing_id/translations/:language',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        }
                    },
                    's': 'listings_d'
                }
            }
        },
        'Manufacturer': {
            'f': {
                'location': {
                    'v': 'public',
                    't': 'string'
                },
                'n': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'a': {
                'Shop': {
                    'v': 'public',
                    't': 'Shop'
                }
            }
        },
        'ParamList': {
            'f': {
                'param_name': {
                    'v': 'public',
                    't': 'string'
                }
            }
        },
        'Payment': {
            'f': {
                'payment_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'buyer_user_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'shop_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'receipt_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'amount_gross': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'amount_fees': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'amount_net': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'posted_gross': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'posted_fees': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'posted_net': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'adjusted_gross': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'adjusted_fees': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'adjusted_net': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'currency': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'shipping_user_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'shipping_address_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'billing_address_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'status': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'shipped_date': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'create_date': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'update_date': {
                    's': 'transactions_r',
                    't': 'int'
                }
            },
            'm': {
                'findPayment': {
                    'u': '/payments/:payment_id',
                    'p': {
                        'payment_id': {
                            'r': true,
                            't': 'array(int)'
                        }
                    },
                    's': 'transactions_r'
                },
                'findShopPaymentByReceipt': {
                    'u': '/shops/:shop_id/receipts/:receipt_id/payments',
                    'p': {
                        'receipt_id': {
                            'r': true,
                            't': 'int'
                        },
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        }
                    },
                    's': 'transactions_r'
                }
            }
        },
        'PaymentAdjustment': {
            'f': {
                'payment_adjustment_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'payment_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'status': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'user_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'reason_code': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'total_adjustment_amount': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'total_fee_adjustment_amount': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'create_date': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'update_date': {
                    's': 'transactions_r',
                    't': 'int'
                }
            },
            'm': {
                'findPaymentAdjustments': {
                    'u': '/payments/:payment_id/adjustments',
                    'p': {
                        'payment_id': {
                            'r': true,
                            't': 'int'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'transactions_r'
                },
                'findPaymentAdjustment': {
                    'u': '/payments/:payment_id/adjustments/:payment_adjustment_id',
                    'p': {
                        'payment_id': {
                            'r': true,
                            't': 'int'
                        },
                        'payment_adjustment_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'transactions_r'
                }
            }
        },
        'PaymentAdjustmentItem': {
            'f': {
                'payment_adjustment_item_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'payment_adjustment_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'adjustment_type': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'amount': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'transaction_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'create_date': {
                    's': 'transactions_r',
                    't': 'int'
                }
            },
            'm': {
                'findPaymentAdjustmentItem': {
                    'u': '/payments/:payment_id/adjustments/:payment_adjustment_id/items/:payment_adjustment_item_id',
                    'p': {
                        'payment_id': {
                            'r': true,
                            't': 'int'
                        },
                        'payment_adjustment_id': {
                            'r': true,
                            't': 'int'
                        },
                        'payment_adjustment_item_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'transactions_r'
                }
            }
        },
        'PaymentTemplate': {
            'f': {
                'payment_template_id': {
                    'v': 'public',
                    't': 'int'
                },
                'allow_bt': {
                    'v': 'public',
                    't': 'boolean'
                },
                'allow_check': {
                    'v': 'public',
                    't': 'boolean'
                },
                'allow_mo': {
                    'v': 'public',
                    't': 'boolean'
                },
                'allow_other': {
                    'v': 'public',
                    't': 'boolean'
                },
                'allow_paypal': {
                    'v': 'public',
                    't': 'boolean'
                },
                'allow_cc': {
                    'v': 'public',
                    't': 'boolean'
                },
                'paypal_email': {
                    's': 'listings_r',
                    't': 'string'
                },
                'first_line': {
                    's': 'listings_r',
                    't': 'string'
                },
                'second_line': {
                    's': 'listings_r',
                    't': 'string'
                },
                'city': {
                    's': 'listings_r',
                    't': 'string'
                },
                'state': {
                    's': 'listings_r',
                    't': 'string'
                },
                'zip': {
                    's': 'listings_r',
                    't': 'string'
                },
                'country_id': {
                    's': 'listings_r',
                    't': 'int'
                },
                'user_id': {
                    's': 'listings_r',
                    't': 'int'
                },
                'listing_payment_id': {
                    'v': 'public',
                    't': 'int'
                },
                'n': {
                    's': 'listings_r',
                    't': 'string'
                }
            },
            'a': {
                'Country': {
                    's': 'listings_r',
                    't': 'Country'
                },
                'User': {
                    's': 'listings_r',
                    't': 'User'
                }
            },
            'm': {
                'findShopPaymentTemplates': {
                    'u': '/shops/:shop_id/payment_templates',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        }
                    },
                    'o': false
                },
                'createShopPaymentTemplate': {
                    'm': 'POST',
                    'u': '/shops/:shop_id/payment_templates',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'allow_check': { 't': 'boolean' },
                        'allow_mo': { 't': 'boolean' },
                        'allow_other': { 't': 'boolean' },
                        'allow_paypal': { 't': 'boolean' },
                        'allow_cc': { 't': 'boolean' },
                        'paypal_email': { 't': 'string' },
                        'first_line': { 't': 'string' },
                        'second_line': { 't': 'string' },
                        'city': { 't': 'string' },
                        'state': { 't': 'string' },
                        'zip': { 't': 'string' },
                        'country_id': { 't': 'int' },
                        'n': { 't': 'string' }
                    },
                    's': 'listings_w'
                },
                'updateShopPaymentTemplate': {
                    'm': 'PUT',
                    'u': '/shops/:shop_id/payment_templates/:payment_template_id',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'allow_check': { 't': 'boolean' },
                        'allow_mo': { 't': 'boolean' },
                        'allow_other': { 't': 'boolean' },
                        'allow_paypal': { 't': 'boolean' },
                        'allow_cc': { 't': 'boolean' },
                        'paypal_email': { 't': 'string' },
                        'first_line': { 't': 'string' },
                        'second_line': { 't': 'string' },
                        'city': { 't': 'string' },
                        'state': { 't': 'string' },
                        'zip': { 't': 'string' },
                        'country_id': { 't': 'int' },
                        'payment_template_id': {
                            'r': true,
                            't': 'int'
                        },
                        'n': { 't': 'string' }
                    },
                    's': 'listings_w'
                },
                'findAllUserPaymentTemplates': {
                    'u': '/users/:user_id/payments/templates',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        }
                    },
                    's': 'listings_r'
                }
            }
        },
        'Receipt': {
            'f': {
                'receipt_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'order_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'seller_user_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'buyer_user_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'creation_tsz': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'last_modified_tsz': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'first_line': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'second_line': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'city': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'state': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'zip': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'country_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'payment_method': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'payment_email': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'message_from_seller': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'message_from_buyer': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'was_paid': {
                    's': 'transactions_r',
                    't': 'boolean'
                },
                'total_tax_cost': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'total_price': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'total_shipping_cost': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'currency_code': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'message_from_payment': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'was_shipped': {
                    's': 'transactions_r',
                    't': 'boolean'
                },
                'buyer_email': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'seller_email': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'discount_amt': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'subtotal': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'grandtotal': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'shipping_tracking_code': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'shipping_tracking_url': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'shipping_carrier': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'shipping_note': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'shipping_notification_date': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'shipments': {
                    's': 'transactions_r',
                    't': 'array(ReceiptShipment)'
                },
                'n': {
                    's': 'transactions_r',
                    't': 'string'
                }
            },
            'a': {
                'Coupon': {
                    's': 'transactions_r',
                    't': 'Coupon'
                },
                'Country': {
                    's': 'transactions_r',
                    't': 'Country'
                },
                'Buyer': {
                    's': 'transactions_r',
                    't': 'User'
                },
                'Seller': {
                    's': 'transactions_r',
                    't': 'User'
                },
                'Transactions': {
                    's': 'transactions_r',
                    't': 'array(Transaction)'
                },
                'Listings': {
                    's': 'transactions_r',
                    't': 'array(Listing)'
                }
            },
            'm': {
                'getReceipt': {
                    'u': '/receipts/:receipt_id',
                    'p': {
                        'receipt_id': {
                            'r': true,
                            't': 'array(int)'
                        }
                    },
                    's': 'transactions_r'
                },
                'updateReceipt': {
                    'm': 'PUT',
                    'u': '/receipts/:receipt_id',
                    'p': {
                        'receipt_id': {
                            'r': true,
                            't': 'int'
                        },
                        'was_paid': { 't': 'boolean' },
                        'was_shipped': { 't': 'boolean' },
                        'message_from_seller': { 't': 'string' },
                        'message_from_buyer': { 't': 'string' }
                    },
                    's': 'transactions_w'
                },
                'findAllShopReceipts': {
                    'u': '/shops/:shop_id/receipts',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'min_created': { 't': 'epoch' },
                        'max_created': { 't': 'epoch' },
                        'min_last_modified': { 't': 'int' },
                        'max_last_modified': { 't': 'int' },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'was_paid': { 't': 'boolean' },
                        'was_shipped': { 't': 'boolean' }
                    },
                    's': 'transactions_r'
                },
                'submitTracking': {
                    'm': 'POST',
                    'u': '/shops/:shop_id/receipts/:receipt_id/tracking',
                    'p': {
                        'tracking_code': {
                            'r': true,
                            't': 'string'
                        },
                        'carrier_name': {
                            'r': true,
                            't': 'string'
                        },
                        'send_bcc': { 't': 'boolean' }
                    },
                    's': 'transactions_w'
                },
                'findAllShopReceiptsByStatus': {
                    'u': '/shops/:shop_id/receipts/:status',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'status': {
                            'r': true,
                            't': 'enum(open, unshipped, unpaid, completed, processing, all)'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'transactions_r'
                },
                'searchAllShopReceipts': {
                    'u': '/shops/:shop_id/receipts/search',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'search_query': {
                            'r': true,
                            't': 'string'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'transactions_r'
                },
                'findAllUserBuyerReceipts': {
                    'u': '/users/:user_id/receipts',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'transactions_r'
                }
            }
        },
        'ReceiptShipment': {
            'f': {
                'carrier_name': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'receipt_shipping_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'tracking_code': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'tracking_url': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'buyer_note': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'notification_date': {
                    's': 'transactions_r',
                    't': 'int'
                }
            }
        },
        'Region': {
            'f': {
                'region_id': {
                    'v': 'public',
                    't': 'int'
                },
                'region_name': {
                    'v': 'public',
                    't': 'string'
                },
                'is_dead': {
                    'v': 'public',
                    't': 'boolean'
                }
            },
            'm': {
                'findAllRegion': {
                    'u': '/regions',
                    'o': false
                },
                'getRegion': {
                    'u': '/regions/:region_id',
                    'p': {
                        'region_id': {
                            'r': true,
                            't': 'array(int)'
                        }
                    },
                    'o': false
                },
                'findEligibleRegions': {
                    'u': '/regions/eligible',
                    'o': false
                }
            }
        },
        'Segment': {
            'f': {
                'path': {
                    'v': 'public',
                    't': 'string'
                },
                'short_name': {
                    'v': 'public',
                    't': 'string'
                },
                'has_children': {
                    'v': 'public',
                    't': 'boolean'
                },
                'image_url': {
                    'v': 'public',
                    't': 'string'
                },
                'shop_id': {
                    'v': 'public',
                    't': 'int'
                },
                'shop_name': {
                    'v': 'public',
                    't': 'int'
                },
                'listing_id': {
                    'v': 'public',
                    't': 'int'
                },
                'n': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'a': {
                'MainImage': {
                    'v': 'public',
                    't': 'ListingImage'
                }
            },
            'm': {
                'findBrowseSegments': {
                    'u': '/segments',
                    'p': {
                        'region': {
                            'd': 'US',
                            't': 'string'
                        },
                        'path': { 't': 'string' }
                    },
                    'o': false
                }
            }
        },
        'SegmentPoster': {
            'f': {
                'path': {
                    'v': 'public',
                    't': 'string'
                },
                'image_url': {
                    'v': 'public',
                    't': 'string'
                },
                'shop_id': {
                    'v': 'public',
                    't': 'int'
                },
                'shop_name': {
                    'v': 'public',
                    't': 'int'
                },
                'weight': {
                    'v': 'public',
                    't': 'int'
                },
                'listing_id': {
                    'v': 'public',
                    't': 'int'
                },
                'n': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'findBrowseSegmentPosters': {
                    'u': '/segments/posters',
                    'p': { 'path': { 't': 'string' } },
                    'o': false
                }
            }
        },
        'ShippingInfo': {
            'f': {
                'shipping_info_id': {
                    'v': 'public',
                    't': 'int'
                },
                'origin_country_id': {
                    'v': 'public',
                    't': 'int'
                },
                'destination_country_id': {
                    'v': 'public',
                    't': 'int'
                },
                'currency_code': {
                    'v': 'public',
                    't': 'string'
                },
                'primary_cost': {
                    'v': 'public',
                    't': 'float'
                },
                'secondary_cost': {
                    'v': 'public',
                    't': 'float'
                },
                'listing_id': {
                    'v': 'public',
                    't': 'int'
                },
                'region_id': {
                    'v': 'public',
                    't': 'int'
                },
                'origin_country_name': {
                    'v': 'public',
                    't': 'string'
                },
                'destination_country_name': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'a': {
                'DestinationCountry': {
                    'v': 'public',
                    't': 'Country'
                },
                'OriginCountry': {
                    'v': 'public',
                    't': 'Country'
                },
                'Region': {
                    'v': 'public',
                    't': 'Region'
                }
            },
            'm': {
                'findAllListingShippingProfileEntries': {
                    'u': '/listings/:listing_id/shipping/info',
                    'o': false
                },
                'createShippingInfo': {
                    'm': 'POST',
                    'u': '/listings/:listing_id/shipping/info',
                    'p': {
                        'destination_country_id': { 't': 'int' },
                        'primary_cost': {
                            'r': true,
                            't': 'float'
                        },
                        'secondary_cost': {
                            'r': true,
                            't': 'float'
                        },
                        'region_id': { 't': 'int' },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                },
                'getShippingInfo': {
                    'u': '/shipping/info/:shipping_info_id',
                    'p': {
                        'shipping_info_id': {
                            'r': true,
                            't': 'array(int)'
                        }
                    },
                    's': 'listings_w'
                },
                'updateShippingInfo': {
                    'm': 'PUT',
                    'u': '/shipping/info/:shipping_info_id',
                    'p': {
                        'shipping_info_id': {
                            'r': true,
                            't': 'int'
                        },
                        'destination_country_id': { 't': 'int' },
                        'primary_cost': { 't': 'float' },
                        'secondary_cost': { 't': 'float' },
                        'region_id': { 't': 'int' },
                        'listing_id': { 't': 'int' }
                    },
                    's': 'listings_w'
                },
                'deleteShippingInfo': {
                    'm': 'DELETE',
                    'u': '/shipping/info/:shipping_info_id',
                    'p': {
                        'shipping_info_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                }
            }
        },
        'ShippingOption': {
            'f': {
                'shipping_option_id': {
                    'v': 'public',
                    't': 'int'
                },
                'value': {
                    'v': 'public',
                    't': 'string'
                },
                'price': {
                    'v': 'public',
                    't': 'string'
                },
                'currency_code': {
                    'v': 'public',
                    't': 'string'
                }
            }
        },
        'ShippingTemplate': {
            'f': {
                'shipping_template_id': {
                    's': 'listings_r',
                    't': 'int'
                },
                'title': {
                    's': 'listings_r',
                    't': 'string'
                },
                'user_id': {
                    's': 'listings_r',
                    't': 'int'
                },
                'min_processing_days': {
                    's': 'listings_r',
                    't': 'int'
                },
                'max_processing_days': {
                    's': 'listings_r',
                    't': 'int'
                },
                'processing_days_display_label': {
                    's': 'listings_r',
                    't': 'string'
                },
                'origin_country_id': {
                    's': 'listings_r',
                    't': 'int'
                }
            },
            'a': {
                'Entries': {
                    's': 'listings_r',
                    't': 'array(ShippingTemplateEntry)'
                },
                'Upgrades': {
                    's': 'listings_r',
                    't': 'array(ShippingUpgrade)'
                }
            },
            'm': {
                'createShippingTemplate': {
                    'm': 'POST',
                    'u': '/shipping/templates',
                    'p': {
                        'title': {
                            'r': true,
                            't': 'string'
                        },
                        'origin_country_id': {
                            'r': true,
                            't': 'int'
                        },
                        'destination_country_id': { 't': 'int' },
                        'primary_cost': {
                            'r': true,
                            't': 'float'
                        },
                        'secondary_cost': {
                            'r': true,
                            't': 'float'
                        },
                        'destination_region_id': { 't': 'int' },
                        'min_processing_days': { 't': 'int' },
                        'max_processing_days': { 't': 'int' }
                    },
                    's': 'listings_w'
                },
                'getShippingTemplate': {
                    'u': '/shipping/templates/:shipping_template_id',
                    'p': {
                        'shipping_template_id': {
                            'r': true,
                            't': 'array(int)'
                        }
                    },
                    's': 'listings_r'
                },
                'updateShippingTemplate': {
                    'm': 'PUT',
                    'u': '/shipping/templates/:shipping_template_id',
                    'p': {
                        'shipping_template_id': {
                            'r': true,
                            't': 'int'
                        },
                        'title': { 't': 'string' },
                        'origin_country_id': { 't': 'int' },
                        'min_processing_days': { 't': 'int' },
                        'max_processing_days': { 't': 'int' }
                    },
                    's': 'listings_w'
                },
                'deleteShippingTemplate': {
                    'm': 'DELETE',
                    'u': '/shipping/templates/:shipping_template_id',
                    'p': {
                        'shipping_template_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                },
                'findAllShippingTemplateEntries': {
                    'u': '/shipping/templates/:shipping_template_id/entries',
                    'p': {
                        'shipping_template_id': {
                            'r': true,
                            't': 'int'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'listings_r'
                },
                'findAllUserShippingProfiles': {
                    'u': '/users/:user_id/shipping/templates',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        }
                    }
                }
            }
        },
        'ShippingTemplateEntry': {
            'f': {
                'shipping_template_entry_id': {
                    's': 'listings_r',
                    't': 'int'
                },
                'shipping_template_id': {
                    's': 'listings_r',
                    't': 'int'
                },
                'currency_code': {
                    's': 'listings_r',
                    't': 'string'
                },
                'origin_country_id': {
                    's': 'listings_r',
                    't': 'int'
                },
                'destination_country_id': {
                    's': 'listings_r',
                    't': 'int'
                },
                'destination_region_id': {
                    's': 'listings_r',
                    't': 'int'
                },
                'primary_cost': {
                    's': 'listings_r',
                    't': 'float'
                },
                'secondary_cost': {
                    's': 'listings_r',
                    't': 'float'
                }
            },
            'a': {
                'OriginCountry': {
                    's': 'listings_r',
                    't': 'Country'
                },
                'DestinationCountry': {
                    's': 'listings_r',
                    't': 'Country'
                },
                'DestinationRegion': {
                    's': 'listings_r',
                    't': 'Region'
                },
                'Template': {
                    's': 'listings_r',
                    't': 'ShippingTemplate'
                }
            },
            'm': {
                'createShippingTemplateEntry': {
                    'm': 'POST',
                    'u': '/shipping/templates/entries',
                    'p': {
                        'shipping_template_id': {
                            'r': true,
                            't': 'int'
                        },
                        'destination_country_id': { 't': 'int' },
                        'primary_cost': {
                            'r': true,
                            't': 'float'
                        },
                        'secondary_cost': {
                            'r': true,
                            't': 'float'
                        },
                        'destination_region_id': { 't': 'int' }
                    },
                    's': 'listings_w'
                },
                'getShippingTemplateEntry': {
                    'u': '/shipping/templates/entries/:shipping_template_entry_id',
                    'p': {
                        'shipping_template_entry_id': {
                            'r': true,
                            't': 'array(int)'
                        }
                    },
                    's': 'listings_w'
                },
                'updateShippingTemplateEntry': {
                    'm': 'PUT',
                    'u': '/shipping/templates/entries/:shipping_template_entry_id',
                    'p': {
                        'shipping_template_entry_id': {
                            'r': true,
                            't': 'int'
                        },
                        'destination_country_id': { 't': 'int' },
                        'primary_cost': { 't': 'float' },
                        'secondary_cost': { 't': 'float' }
                    },
                    's': 'listings_w'
                },
                'deleteShippingTemplateEntry': {
                    'm': 'DELETE',
                    'u': '/shipping/templates/entries/:shipping_template_entry_id',
                    'p': {
                        'shipping_template_entry_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                }
            }
        },
        'ShippingUpgrade': {
            'f': {
                'shipping_profile_id': {
                    'v': 'public',
                    't': 'int'
                },
                'value_id': {
                    'v': 'public',
                    't': 'int'
                },
                'value': {
                    'v': 'public',
                    't': 'string'
                },
                'price': {
                    'v': 'public',
                    't': 'float'
                },
                'secondary_price': {
                    'v': 'public',
                    't': 'float'
                },
                'currency_code': {
                    'v': 'public',
                    't': 'string'
                },
                'order': {
                    'v': 'public',
                    't': 'int'
                },
                'language': {
                    'v': 'public',
                    't': 'int'
                },
                't': {
                    'v': 'public',
                    't': 'int'
                }
            },
            'm': {
                'getListingShippingUpgrades': {
                    'u': '/listings/:listing_id/shipping/upgrades',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_r'
                },
                'createListingShippingUpgrade': {
                    'm': 'POST',
                    'u': '/listings/:listing_id/shipping/upgrades',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'value': {
                            'r': true,
                            't': 'string'
                        },
                        'price': {
                            'r': true,
                            't': 'float'
                        },
                        'secondary_price': {
                            'r': true,
                            't': 'float'
                        },
                        't': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                },
                'updateListingShippingUpgrade': {
                    'm': 'PUT',
                    'u': '/listings/:listing_id/shipping/upgrades',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'value_id': {
                            'r': true,
                            't': 'int'
                        },
                        'price': {
                            'r': true,
                            't': 'float'
                        },
                        'secondary_price': {
                            'r': true,
                            't': 'float'
                        },
                        't': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                },
                'deleteListingShippingUpgrade': {
                    'm': 'DELETE',
                    'u': '/listings/:listing_id/shipping/upgrades',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'value_id': {
                            'r': true,
                            't': 'int'
                        },
                        't': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                },
                'findAllShippingTemplateUpgrades': {
                    'u': '/shipping/templates/:shipping_template_id/upgrades',
                    'p': {
                        'shipping_template_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_r'
                },
                'createShippingTemplateUpgrade': {
                    'm': 'POST',
                    'u': '/shipping/templates/:shipping_template_id/upgrades',
                    'p': {
                        'shipping_template_id': {
                            'r': true,
                            't': 'int'
                        },
                        'value': {
                            'r': true,
                            't': 'string'
                        },
                        'price': {
                            'r': true,
                            't': 'float'
                        },
                        'secondary_price': {
                            'r': true,
                            't': 'float'
                        },
                        't': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                },
                'updateShippingTemplateUpgrade': {
                    'm': 'PUT',
                    'u': '/shipping/templates/:shipping_template_id/upgrades',
                    'p': {
                        'shipping_template_id': {
                            'r': true,
                            't': 'int'
                        },
                        'value_id': {
                            'r': true,
                            't': 'int'
                        },
                        'price': {
                            'r': true,
                            't': 'float'
                        },
                        'secondary_price': {
                            'r': true,
                            't': 'float'
                        },
                        't': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                },
                'deleteShippingTemplateUpgrade': {
                    'm': 'DELETE',
                    'u': '/shipping/templates/:shipping_template_id/upgrades',
                    'p': {
                        'shipping_template_id': {
                            'r': true,
                            't': 'int'
                        },
                        'value_id': {
                            'r': true,
                            't': 'int'
                        },
                        't': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_w'
                }
            }
        },
        'Shop': {
            'f': {
                'shop_id': {
                    'v': 'public',
                    't': 'int'
                },
                'shop_name': {
                    'v': 'public',
                    't': 'string'
                },
                'first_line': {
                    's': 'shops_rw',
                    't': 'string'
                },
                'second_line': {
                    's': 'shops_rw',
                    't': 'string'
                },
                'city': {
                    's': 'shops_rw',
                    't': 'string'
                },
                'state': {
                    's': 'shops_rw',
                    't': 'string'
                },
                'zip': {
                    's': 'shops_rw',
                    't': 'string'
                },
                'country_id': {
                    's': 'shops_rw',
                    't': 'int'
                },
                'user_id': {
                    'v': 'public',
                    't': 'int'
                },
                'creation_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'title': {
                    'v': 'public',
                    't': 'string'
                },
                'announcement': {
                    'v': 'public',
                    't': 'string'
                },
                'currency_code': {
                    'v': 'public',
                    't': 'string'
                },
                'is_vacation': {
                    'v': 'public',
                    't': 'boolean'
                },
                'vacation_message': {
                    'v': 'public',
                    't': 'string'
                },
                'sale_message': {
                    'v': 'public',
                    't': 'string'
                },
                'digital_sale_message': {
                    'v': 'public',
                    't': 'string'
                },
                'last_updated_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'listing_active_count': {
                    'v': 'public',
                    't': 'int'
                },
                'login_name': {
                    'v': 'public',
                    't': 'string'
                },
                'lat': {
                    's': 'shops_rw',
                    't': 'float'
                },
                'lon': {
                    's': 'shops_rw',
                    't': 'float'
                },
                'accepts_custom_requests': {
                    'v': 'public',
                    't': 'boolean'
                },
                'policy_welcome': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_payment': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_shipping': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_refunds': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_additional': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_seller_info': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_updated_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'vacation_autoreply': {
                    'v': 'public',
                    't': 'string'
                },
                'ga_code': {
                    's': 'shops_rw',
                    't': 'string'
                },
                'url': {
                    'v': 'public',
                    't': 'string'
                },
                'image_url_760x100': {
                    'v': 'public',
                    't': 'string'
                },
                'num_favorers': {
                    'v': 'public',
                    't': 'int'
                },
                'languages': {
                    'v': 'public',
                    't': 'string'
                },
                'n': {
                    's': 'shops_rw',
                    't': 'string'
                }
            },
            'a': {
                'User': {
                    'v': 'public',
                    't': 'User'
                },
                'About': {
                    'v': 'public',
                    't': 'ShopAbout'
                },
                'Sections': {
                    'v': 'public',
                    't': 'array(ShopSection)'
                },
                'Listings': {
                    'v': 'public',
                    't': 'array(Listing)'
                },
                'Receipts': {
                    's': 'shops_rw',
                    't': 'array(Receipt)'
                },
                'Transactions': {
                    's': 'shops_rw',
                    't': 'array(Transaction)'
                },
                'Translations': {
                    'v': 'public',
                    't': 'array(ShopTranslation)'
                }
            },
            'm': {
                'findAllShops': {
                    'u': '/shops',
                    'p': {
                        'shop_name': { 't': 'string' },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' },
                        'lat': { 't': 'latitude' },
                        'lon': { 't': 'longitude' },
                        'distance_max': {
                            'd': '35',
                            't': 'float'
                        }
                    },
                    'o': false
                },
                'getShop': {
                    'u': '/shops/:shop_id',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'array(shop_id_or_name)'
                        }
                    },
                    'o': false
                },
                'updateShop': {
                    'm': 'PUT',
                    'u': '/shops/:shop_id',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'title': { 't': 'string' },
                        'announcement': { 't': 'text' },
                        'sale_message': { 't': 'text' },
                        'policy_welcome': { 't': 'text' },
                        'policy_payment': { 't': 'text' },
                        'policy_shipping': { 't': 'text' },
                        'policy_refunds': { 't': 'text' },
                        'policy_additional': { 't': 'text' },
                        'policy_seller_info': { 't': 'text' },
                        'digital_sale_message': { 't': 'text' }
                    },
                    's': 'shops_rw'
                },
                'uploadShopBanner': {
                    'm': 'POST',
                    'u': '/shops/:shop_id/appearance/banner',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'image': {
                            'r': true,
                            't': 'imagefile'
                        }
                    },
                    's': 'shops_rw'
                },
                'deleteShopBanner': {
                    'm': 'DELETE',
                    'u': '/shops/:shop_id/appearance/banner',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        }
                    },
                    's': 'shops_rw'
                },
                'getListingShop': {
                    'u': '/shops/listing/:listing_id',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    'o': false
                },
                'findAllUserShops': {
                    'u': '/users/:user_id/shops',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                }
            }
        },
        'ShopAbout': {
            'f': {
                'shop_id': {
                    'v': 'public',
                    't': 'int'
                },
                'status': {
                    'v': 'public',
                    't': 'string'
                },
                'story_headline': {
                    'v': 'public',
                    't': 'string'
                },
                'story_leading_paragraph': {
                    'v': 'public',
                    't': 'string'
                },
                'story': {
                    'v': 'public',
                    't': 'string'
                },
                'related_links': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'a': {
                'Shop': {
                    'v': 'public',
                    't': 'Shop'
                },
                'Members': {
                    'v': 'public',
                    't': 'array(ShopAboutMember)'
                },
                'Images': {
                    'v': 'public',
                    't': 'array(ShopAboutImages)'
                }
            },
            'm': {
                'getShopAbout': {
                    'u': '/shops/:shop_id/about',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        }
                    },
                    'o': false
                }
            }
        },
        'ShopAboutImage': {
            'f': {
                'shop_id': {
                    'v': 'public',
                    't': 'int'
                },
                'image_id': {
                    'v': 'public',
                    't': 'int'
                },
                'caption': {
                    'v': 'public',
                    't': 'string'
                },
                'rank': {
                    'v': 'public',
                    't': 'int'
                },
                'url_178x178': {
                    'v': 'public',
                    't': 'string'
                },
                'url_545xN': {
                    'v': 'public',
                    't': 'string'
                },
                'url_760xN': {
                    'v': 'public',
                    't': 'string'
                },
                'url_fullxfull': {
                    'v': 'public',
                    't': 'string'
                }
            }
        },
        'ShopAboutMember': {
            'f': {
                'shop_about_member_id': {
                    'v': 'public',
                    't': 'int'
                },
                'shop_id': {
                    'v': 'public',
                    't': 'int'
                },
                'role': {
                    'v': 'public',
                    't': 'string'
                },
                'bio': {
                    'v': 'public',
                    't': 'string'
                },
                'rank': {
                    'v': 'public',
                    't': 'int'
                },
                'is_owner': {
                    'v': 'public',
                    't': 'boolean'
                },
                'url_90x90': {
                    'v': 'public',
                    't': 'string'
                },
                'url_190x190': {
                    'v': 'public',
                    't': 'string'
                },
                'has_stale_translations': {
                    'v': 'public',
                    't': 'boolean'
                },
                'n': {
                    'v': 'public',
                    't': 'string'
                }
            }
        },
        'ShopSection': {
            'f': {
                'shop_section_id': {
                    'v': 'public',
                    't': 'int'
                },
                'title': {
                    'v': 'public',
                    't': 'string'
                },
                'rank': {
                    'v': 'public',
                    't': 'int'
                },
                'user_id': {
                    'v': 'public',
                    't': 'int'
                },
                'active_listing_count': {
                    'v': 'public',
                    't': 'int'
                }
            },
            'a': {
                'Shop': {
                    'v': 'public',
                    't': 'Shop'
                },
                'Listings': {
                    'v': 'public',
                    't': 'array(Listing)'
                },
                'Translations': {
                    'v': 'public',
                    't': 'array(ShopSectionTranslation)'
                }
            },
            'm': {
                'findAllShopSections': {
                    'u': '/shops/:shop_id/sections',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        }
                    },
                    'o': false
                },
                'createShopSection': {
                    'm': 'POST',
                    'u': '/shops/:shop_id/sections',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'title': { 't': 'text' },
                        'user_id': { 't': 'int' }
                    },
                    's': 'shops_rw'
                },
                'getShopSection': {
                    'u': '/shops/:shop_id/sections/:shop_section_id',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'shop_section_id': {
                            'r': true,
                            't': 'array(int)'
                        }
                    },
                    'o': false
                },
                'updateShopSection': {
                    'm': 'PUT',
                    'u': '/shops/:shop_id/sections/:shop_section_id',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'shop_section_id': {
                            'r': true,
                            't': 'int'
                        },
                        'title': { 't': 'text' },
                        'user_id': { 't': 'int' }
                    },
                    's': 'shops_rw'
                },
                'deleteShopSection': {
                    'm': 'DELETE',
                    'u': '/shops/:shop_id/sections/:shop_section_id',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'shop_section_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'shops_rw'
                }
            }
        },
        'ShopSectionTranslation': {
            'f': {
                'shop_section_id': {
                    'v': 'public',
                    't': 'int'
                },
                'language': {
                    'v': 'public',
                    't': 'language'
                },
                'title': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'a': {
                'ShopSection': {
                    'v': 'public',
                    't': 'ShopSection'
                }
            },
            'm': {
                'getShopSectionTranslation': {
                    'u': '/shops/:shop_id/sections/:shop_section_id/translations/:language',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'shop_section_id': {
                            'r': true,
                            't': 'int'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        }
                    },
                    'o': false
                },
                'createShopSectionTranslation': {
                    'm': 'POST',
                    'u': '/shops/:shop_id/sections/:shop_section_id/translations/:language',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'shop_section_id': {
                            'r': true,
                            't': 'int'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        },
                        'title': { 't': 'string' }
                    },
                    's': 'shops_rw'
                },
                'updateShopSectionTranslation': {
                    'm': 'PUT',
                    'u': '/shops/:shop_id/sections/:shop_section_id/translations/:language',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'shop_section_id': {
                            'r': true,
                            't': 'int'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        },
                        'title': { 't': 'string' }
                    },
                    's': 'shops_rw'
                },
                'deleteShopSectionTranslation': {
                    'm': 'DELETE',
                    'u': '/shops/:shop_id/sections/:shop_section_id/translations/:language',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'shop_section_id': {
                            'r': true,
                            't': 'int'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        }
                    },
                    's': 'shops_rw'
                }
            }
        },
        'ShopTranslation': {
            'f': {
                'shop_id': {
                    'v': 'public',
                    't': 'int'
                },
                'language': {
                    'v': 'public',
                    't': 'language'
                },
                'announcement': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_welcome': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_payment': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_shipping': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_refunds': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_additional': {
                    'v': 'public',
                    't': 'string'
                },
                'policy_seller_info': {
                    'v': 'public',
                    't': 'string'
                },
                'sale_message': {
                    'v': 'public',
                    't': 'string'
                },
                'digital_sale_message': {
                    'v': 'public',
                    't': 'string'
                },
                'title': {
                    'v': 'public',
                    't': 'string'
                },
                'vacation_autoreply': {
                    'v': 'public',
                    't': 'string'
                },
                'vacation_message': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'getShopTranslation': {
                    'u': '/shops/:shop_id/translations/:language',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        }
                    },
                    'o': false
                },
                'createShopTranslation': {
                    'm': 'POST',
                    'u': '/shops/:shop_id/translations/:language',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        },
                        'title': { 't': 'string' },
                        'sale_message': { 't': 'string' },
                        'announcement': { 't': 'string' },
                        'policy_welcome': { 't': 'string' },
                        'policy_payment': { 't': 'string' },
                        'policy_shipping': { 't': 'string' },
                        'policy_refunds': { 't': 'string' },
                        'policy_additional': { 't': 'string' },
                        'policy_seller_info': { 't': 'string' },
                        'vacation_autoreply': { 't': 'string' },
                        'vacation_message': { 't': 'string' }
                    },
                    's': 'shops_rw'
                },
                'updateShopTranslation': {
                    'm': 'PUT',
                    'u': '/shops/:shop_id/translations/:language',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        },
                        'title': { 't': 'string' },
                        'sale_message': { 't': 'string' },
                        'announcement': { 't': 'string' },
                        'policy_welcome': { 't': 'string' },
                        'policy_payment': { 't': 'string' },
                        'policy_shipping': { 't': 'string' },
                        'policy_refunds': { 't': 'string' },
                        'policy_additional': { 't': 'string' },
                        'policy_seller_info': { 't': 'string' },
                        'vacation_autoreply': { 't': 'string' },
                        'vacation_message': { 't': 'string' }
                    },
                    's': 'shops_rw'
                },
                'deleteShopTranslation': {
                    'm': 'DELETE',
                    'u': '/shops/:shop_id/translations/:language',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'language': {
                            'r': true,
                            't': 'language'
                        }
                    },
                    's': 'shops_rw'
                }
            }
        },
        'Style': {
            'f': {
                'style_id': {
                    'v': 'public',
                    't': 'int'
                },
                'style': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'findSuggestedStyles': {
                    'u': '/taxonomy/styles',
                    'o': false
                }
            }
        },
        'Team': {
            'f': {
                'group_id': {
                    'v': 'public',
                    't': 'int'
                },
                'create_date': {
                    'v': 'public',
                    't': 'int'
                },
                'update_date': {
                    'v': 'public',
                    't': 'int'
                },
                'tags': {
                    'v': 'public',
                    't': 'string'
                },
                'n': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'findAllTeams': {
                    'u': '/teams',
                    'p': {
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'findTeams': {
                    'u': '/teams/:team_ids/',
                    'p': {
                        'team_ids': {
                            'r': true,
                            't': 'array(team_id_or_name)'
                        }
                    },
                    'o': false
                },
                'findAllTeamsForUser': {
                    'u': '/users/:user_id/teams',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                }
            }
        },
        'Transaction': {
            'f': {
                'transaction_id': {
                    'v': 'public',
                    't': 'int'
                },
                'title': {
                    'v': 'public',
                    't': 'string'
                },
                'seller_user_id': {
                    'v': 'public',
                    't': 'int'
                },
                'buyer_user_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'creation_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'paid_tsz': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'shipped_tsz': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'price': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'currency_code': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'quantity': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'tags': {
                    'v': 'public',
                    't': 'string'
                },
                'materials': {
                    'v': 'public',
                    't': 'string'
                },
                'image_listing_id': {
                    'v': 'public',
                    't': 'int'
                },
                'receipt_id': {
                    's': 'transactions_r',
                    't': 'int'
                },
                'shipping_cost': {
                    's': 'transactions_r',
                    't': 'float'
                },
                'is_digital': {
                    'v': 'public',
                    't': 'boolean'
                },
                'file_data': {
                    'v': 'public',
                    't': 'string'
                },
                'listing_id': {
                    'v': 'public',
                    't': 'int'
                },
                'seller_feedback_id': {
                    'v': 'public',
                    't': 'int'
                },
                'buyer_feedback_id': {
                    'v': 'public',
                    't': 'int'
                },
                'transaction_type': {
                    's': 'transactions_r',
                    't': 'string'
                },
                'url': {
                    'v': 'public',
                    't': 'string'
                },
                'variations': {
                    'v': 'public',
                    't': 'array(Variations_SelectedProperty)'
                }
            },
            'a': {
                'Buyer': {
                    's': 'transactions_r',
                    't': 'User'
                },
                'MainImage': {
                    'v': 'public',
                    't': 'ListingImage'
                },
                'Listing': {
                    'v': 'public',
                    't': 'Listing'
                },
                'Seller': {
                    'v': 'public',
                    't': 'User'
                },
                'Receipt': {
                    's': 'transactions_r',
                    't': 'Receipt'
                }
            },
            'm': {
                'getTransaction': {
                    'u': '/transactions/:transaction_id',
                    'p': {
                        'transaction_id': {
                            'r': true,
                            't': 'array(int)'
                        }
                    },
                    's': 'transactions_r'
                },
                'findAllListingTransactions': {
                    'u': '/listings/:listing_id/transactions',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'transactions_r'
                },
                'findAllReceiptTransactions': {
                    'u': '/receipts/:receipt_id/transactions',
                    'p': {
                        'receipt_id': {
                            'r': true,
                            't': 'int'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'transactions_r'
                },
                'findAllShopTransactions': {
                    'u': '/shops/:shop_id/transactions',
                    'p': {
                        'shop_id': {
                            'r': true,
                            't': 'shop_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'transactions_r'
                },
                'findAllUserBuyerTransactions': {
                    'u': '/users/:user_id/transactions',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'transactions_r'
                }
            }
        },
        'Treasury': {
            'f': {
                'id': {
                    'v': 'public',
                    't': 'string'
                },
                'title': {
                    'v': 'public',
                    't': 'string'
                },
                'homepage': {
                    'v': 'public',
                    't': 'int'
                },
                'mature': {
                    'v': 'public',
                    't': 'boolean'
                },
                'private': {
                    'v': 'public',
                    't': 'boolean'
                },
                'locale': {
                    'v': 'public',
                    't': 'string'
                },
                'comment_count': {
                    'v': 'public',
                    't': 'int'
                },
                'tags': {
                    'v': 'public',
                    't': 'string'
                },
                'counts': {
                    'v': 'public',
                    't': 'TreasuryCounts'
                },
                'hotness': {
                    'v': 'public',
                    't': 'float'
                },
                'hotness_color': {
                    'v': 'public',
                    't': 'string'
                },
                'user_id': {
                    'v': 'public',
                    't': 'int'
                },
                'user_name': {
                    'v': 'public',
                    't': 'string'
                },
                'user_avatar_id': {
                    'v': 'public',
                    't': 'int'
                },
                'listings': {
                    'v': 'public',
                    't': 'array(TreasuryListing)'
                },
                'creation_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'became_public_date': {
                    'v': 'public',
                    't': 'int'
                }
            },
            'm': {
                'findAllTreasuries': {
                    'u': '/treasuries',
                    'p': {
                        'keywords': { 't': 'treasury_search_string' },
                        'sort_on': {
                            'd': 'hotness',
                            't': 'enum(hotness, created)'
                        },
                        'sort_order': {
                            'd': 'down',
                            't': 'enum(up, down)'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'createTreasury': {
                    'm': 'POST',
                    'u': '/treasuries',
                    'p': {
                        'title': {
                            'r': true,
                            't': 'treasury_title'
                        },
                        'listing_ids': {
                            'r': true,
                            't': 'array(int)'
                        },
                        'tags': { 't': 'array(string)' },
                        'private': {
                            'd': '0',
                            't': 'boolean'
                        }
                    },
                    's': 'treasury_w'
                },
                'getTreasury': {
                    'u': '/treasuries/:treasury_key',
                    'p': {
                        'treasury_key': {
                            'r': true,
                            't': 'treasury_id'
                        }
                    },
                    'o': false
                },
                'deleteTreasury': {
                    'm': 'DELETE',
                    'u': '/treasuries/:treasury_key',
                    's': 'treasury_w'
                },
                'findAllUserTreasuries': {
                    'u': '/users/:user_id/treasuries',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'sort_on': {
                            'd': 'hotness',
                            't': 'enum(hotness, created)'
                        },
                        'sort_order': {
                            'd': 'down',
                            't': 'enum(up, down)'
                        },
                        'include_private': {
                            'd': '0',
                            't': 'boolean'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                }
            }
        },
        'TreasuryCounts': {
            'f': {
                'clicks': {
                    'v': 'public',
                    't': 'int'
                },
                'views': {
                    'v': 'public',
                    't': 'int'
                },
                'shares': {
                    'v': 'public',
                    't': 'int'
                },
                'reports': {
                    'v': 'public',
                    't': 'int'
                }
            }
        },
        'TreasuryListing': {
            'f': {
                'data': {
                    'v': 'public',
                    't': 'TreasuryListingData'
                },
                'creation_tsz': {
                    'v': 'public',
                    't': 'float'
                }
            },
            'm': {
                'addTreasuryListing': {
                    'm': 'POST',
                    'u': '/treasuries/:treasury_key/listings',
                    'p': {
                        'treasury_key': {
                            'r': true,
                            't': 'treasury_id'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'treasury_w'
                },
                'removeTreasuryListing': {
                    'm': 'DELETE',
                    'u': '/treasuries/:treasury_key/listings/:listing_id',
                    'p': {
                        'treasury_key': {
                            'r': true,
                            't': 'treasury_id'
                        },
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'treasury_w'
                }
            }
        },
        'TreasuryListingData': {
            'f': {
                'user_id': {
                    'v': 'public',
                    't': 'int'
                },
                'title': {
                    'v': 'public',
                    't': 'string'
                },
                'price': {
                    'v': 'public',
                    't': 'float'
                },
                'currency_code': {
                    'v': 'public',
                    't': 'string'
                },
                'listing_id': {
                    'v': 'public',
                    't': 'int'
                },
                'state': {
                    'v': 'public',
                    't': 'string'
                },
                'shop_name': {
                    'v': 'public',
                    't': 'string'
                },
                'image_id': {
                    'v': 'public',
                    't': 'int'
                },
                'image_url_75x75': {
                    'v': 'public',
                    't': 'string'
                },
                'image_url_170x135': {
                    'v': 'public',
                    't': 'string'
                }
            }
        },
        'User': {
            'f': {
                'user_id': {
                    'v': 'public',
                    't': 'int'
                },
                'login_name': {
                    'v': 'public',
                    't': 'string'
                },
                'primary_email': {
                    's': 'email_r',
                    't': 'string'
                },
                'creation_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'referred_by_user_id': {
                    'v': 'public',
                    't': 'int'
                },
                'feedback_info': {
                    'v': 'public',
                    't': 'FeedbackInfo'
                },
                'awaiting_feedback_count': { 't': 'int' }
            },
            'a': {
                'Shops': {
                    'v': 'public',
                    't': 'array(Shop)'
                },
                'Profile': {
                    'v': 'public',
                    't': 'UserProfile'
                },
                'BuyerReceipts': {
                    's': 'transactions_r',
                    't': 'array(Receipt)'
                },
                'BuyerTransactions': {
                    's': 'transactions_r',
                    't': 'array(Transaction)'
                },
                'Addresses': {
                    's': 'profile_r',
                    't': 'array(UserAddress)'
                },
                'Charges': {
                    's': 'billing_r',
                    't': 'array(BillCharge)'
                },
                'Payments': {
                    's': 'billing_r',
                    't': 'array(BillPayment)'
                }
            },
            'm': {
                'findAllUsers': {
                    'u': '/users',
                    'p': {
                        'keywords': { 't': 'string' },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'getUser': {
                    'u': '/users/:user_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'array(user_id_or_name)'
                        }
                    },
                    'o': false
                },
                'findAllUsersForTeam': {
                    'u': '/teams/:team_id/users/',
                    'p': {
                        'team_id': {
                            'r': true,
                            't': 'int'
                        },
                        'status': {
                            'd': 'active',
                            't': 'enum(active, invited, pending)'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'getCirclesContainingUser': {
                    'u': '/users/:user_id/circles',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'getConnectedUser': {
                    'u': '/users/:user_id/circles/:to_user_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'to_user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'unconnectUsers': {
                    'm': 'DELETE',
                    'u': '/users/:user_id/circles/:to_user_id',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'to_user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        }
                    },
                    's': 'profile_w'
                },
                'getConnectedUsers': {
                    'u': '/users/:user_id/connected_users',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    'o': false
                },
                'connectUsers': {
                    'm': 'POST',
                    'u': '/users/:user_id/connected_users',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'to_user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        }
                    },
                    's': 'profile_w'
                }
            }
        },
        'UserAddress': {
            'f': {
                'user_address_id': {
                    's': 'address_r',
                    't': 'int'
                },
                'user_id': {
                    's': 'address_r',
                    't': 'int'
                },
                'first_line': {
                    's': 'address_r',
                    't': 'text'
                },
                'second_line': {
                    's': 'address_r',
                    't': 'text'
                },
                'city': {
                    's': 'address_r',
                    't': 'text'
                },
                'state': {
                    's': 'address_r',
                    't': 'text'
                },
                'zip': {
                    's': 'address_r',
                    't': 'text'
                },
                'country_id': {
                    's': 'address_r',
                    't': 'int'
                },
                'country_name': {
                    's': 'address_r',
                    't': 'string'
                },
                'n': {
                    's': 'address_r',
                    't': 'text'
                }
            },
            'a': {
                'Country': {
                    's': 'address_r',
                    't': 'Country'
                },
                'User': {
                    's': 'address_r',
                    't': 'User'
                }
            },
            'm': {
                'findAllUserAddresses': {
                    'u': '/users/:user_id/addresses',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'limit': {
                            'd': '25',
                            't': 'int'
                        },
                        'offset': {
                            'd': '0',
                            't': 'int'
                        },
                        'page': { 't': 'int' }
                    },
                    's': 'address_r'
                },
                'createUserAddress': {
                    'm': 'POST',
                    'u': '/users/:user_id/addresses/',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'first_line': {
                            'r': true,
                            't': 'string'
                        },
                        'second_line': { 't': 'string' },
                        'city': {
                            'r': true,
                            't': 'string'
                        },
                        'state': { 't': 'string' },
                        'zip': {
                            'r': true,
                            't': 'string'
                        },
                        'country_id': {
                            'r': true,
                            't': 'int'
                        },
                        'n': {
                            'r': true,
                            't': 'string'
                        }
                    },
                    's': 'address_w'
                },
                'getUserAddress': {
                    'u': '/users/:user_id/addresses/:user_address_id',
                    'p': {
                        'user_address_id': {
                            'r': true,
                            't': 'array(int)'
                        }
                    },
                    's': 'address_r'
                },
                'deleteUserAddress': {
                    'm': 'DELETE',
                    'u': '/users/:user_id/addresses/:user_address_id',
                    'p': {
                        'user_address_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'address_w'
                }
            }
        },
        'UserProfile': {
            'f': {
                'user_profile_id': {
                    'v': 'public',
                    't': 'int'
                },
                'user_id': {
                    'v': 'public',
                    't': 'int'
                },
                'login_name': {
                    'v': 'public',
                    't': 'string'
                },
                'bio': {
                    'v': 'public',
                    't': 'string'
                },
                'gender': {
                    'v': 'public',
                    't': 'string'
                },
                'birth_month': {
                    'v': 'public',
                    't': 'string'
                },
                'birth_day': {
                    'v': 'public',
                    't': 'string'
                },
                'birth_year': {
                    's': 'profile_r',
                    't': 'string'
                },
                'join_tsz': {
                    'v': 'public',
                    't': 'float'
                },
                'materials': {
                    'v': 'public',
                    't': 'string'
                },
                'country_id': {
                    'v': 'public',
                    't': 'int'
                },
                'region': {
                    'v': 'public',
                    't': 'string'
                },
                'city': {
                    'v': 'public',
                    't': 'string'
                },
                'location': {
                    'v': 'public',
                    't': 'string'
                },
                'avatar_id': {
                    'v': 'public',
                    't': 'int'
                },
                'lat': {
                    's': 'profile_r',
                    't': 'float'
                },
                'lon': {
                    's': 'profile_r',
                    't': 'float'
                },
                'transaction_buy_count': {
                    'v': 'public',
                    't': 'int'
                },
                'transaction_sold_count': {
                    'v': 'public',
                    't': 'int'
                },
                'is_seller': {
                    'v': 'public',
                    't': 'boolean'
                },
                'image_url_75x75': {
                    'v': 'public',
                    't': 'string'
                },
                'first_name': {
                    'v': 'public',
                    't': 'string'
                },
                'last_name': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'a': {
                'Country': {
                    'v': 'public',
                    't': 'Country'
                }
            },
            'm': {
                'findUserProfile': {
                    'u': '/users/:user_id/profile',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        }
                    },
                    'o': false
                },
                'updateUserProfile': {
                    'm': 'PUT',
                    'u': '/users/:user_id/profile',
                    'p': {
                        'user_id': {
                            'r': true,
                            't': 'user_id_or_name'
                        },
                        'bio': { 't': 'text' },
                        'gender': { 't': 'string' },
                        'birth_month': { 't': 'int' },
                        'birth_day': { 't': 'int' },
                        'birth_year': { 't': 'int' },
                        'materials': { 't': 'string' },
                        'country_id': { 't': 'string' },
                        'region': { 't': 'string' },
                        'city': { 't': 'string' }
                    },
                    's': 'profile_w'
                }
            }
        },
        'Variations_Option': {
            'f': {
                'value_id': {
                    'v': 'public',
                    't': 'int'
                },
                'value': {
                    'v': 'public',
                    't': 'string'
                },
                'formatted_value': {
                    'v': 'public',
                    't': 'string'
                },
                'is_available': {
                    'v': 'public',
                    't': 'boolean'
                },
                'price_diff': {
                    'v': 'public',
                    't': 'int'
                },
                'price': {
                    'v': 'public',
                    't': 'int'
                }
            }
        },
        'Variations_Property': {
            'f': {
                'property_id': {
                    'v': 'public',
                    't': 'int'
                },
                'formatted_name': {
                    'v': 'public',
                    't': 'string'
                },
                'options': {
                    'v': 'public',
                    't': 'array(Variations_Option)'
                }
            },
            'm': {
                'getListingVariations': {
                    'u': '/listings/:listing_id/variations',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        }
                    },
                    's': 'listings_r'
                },
                'createListingVariations': {
                    'm': 'POST',
                    'u': '/listings/:listing_id/variations',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'variations': {
                            'r': true,
                            't': 'array(listing_variation)'
                        },
                        'custom_property_names': { 't': 'map(int, string)' },
                        'recipient_id': { 't': 'int' },
                        'sizing_scale': { 't': 'int' },
                        'weight_scale': { 't': 'int' },
                        'height_scale': { 't': 'int' },
                        'length_scale': { 't': 'int' },
                        'width_scale': { 't': 'int' },
                        'diameter_scale': { 't': 'int' },
                        'dimensions_scale': { 't': 'int' }
                    },
                    's': 'listings_w'
                },
                'updateListingVariations': {
                    'm': 'PUT',
                    'u': '/listings/:listing_id/variations',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'variations': {
                            'r': true,
                            't': 'array(listing_variation)'
                        },
                        'custom_property_names': { 't': 'map(int, string)' },
                        'recipient_id': { 't': 'int' },
                        'sizing_scale': { 't': 'int' },
                        'weight_scale': { 't': 'int' },
                        'height_scale': { 't': 'int' },
                        'length_scale': { 't': 'int' },
                        'width_scale': { 't': 'int' },
                        'diameter_scale': { 't': 'int' },
                        'dimensions_scale': { 't': 'int' }
                    },
                    's': 'listings_w'
                },
                'createListingVariation': {
                    'm': 'POST',
                    'u': '/listings/:listing_id/variations/:property_id',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'property_id': {
                            'r': true,
                            't': 'int'
                        },
                        'value': {
                            'r': true,
                            't': 'string'
                        },
                        'is_available': {
                            'd': '1',
                            't': 'boolean'
                        },
                        'price': { 't': 'float' }
                    },
                    's': 'listings_w'
                },
                'updateListingVariation': {
                    'm': 'PUT',
                    'u': '/listings/:listing_id/variations/:property_id',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'property_id': {
                            'r': true,
                            't': 'int'
                        },
                        'value': {
                            'r': true,
                            't': 'string'
                        },
                        'is_available': {
                            'r': true,
                            't': 'boolean'
                        },
                        'price': { 't': 'float' }
                    },
                    's': 'listings_w'
                },
                'deleteListingVariation': {
                    'm': 'DELETE',
                    'u': '/listings/:listing_id/variations/:property_id',
                    'p': {
                        'listing_id': {
                            'r': true,
                            't': 'int'
                        },
                        'property_id': {
                            'r': true,
                            't': 'int'
                        },
                        'value': {
                            'r': true,
                            't': 'string'
                        }
                    },
                    's': 'listings_w'
                }
            }
        },
        'Variations_PropertyQualifier': {
            'f': {
                'property_id': {
                    'v': 'public',
                    't': 'int'
                },
                'options': {
                    'v': 'public',
                    't': 'int'
                },
                'results': {
                    'v': 'public',
                    't': 'map(string, Variations_PropertyQualifier)'
                },
                'aliases': {
                    'v': 'public',
                    't': 'string'
                }
            }
        },
        'Variations_PropertySet': {
            'f': {
                'property_set_id': {
                    'v': 'public',
                    't': 'int'
                },
                'properties': {
                    'v': 'public',
                    't': 'map(int, Variations_PropertySetProperty)'
                },
                'qualifying_properties': {
                    'v': 'public',
                    't': 'map(int, Variations_PropertySetProperty)'
                },
                'options': {
                    'v': 'public',
                    't': 'int'
                },
                'qualifiers': {
                    'v': 'public',
                    't': 'map(int, array(Variations_PropertyQualifier))'
                }
            },
            'm': {
                'findPropertySet': {
                    'u': '/property_sets',
                    'p': { 'category_id': { 't': 'int' } },
                    'o': false
                }
            }
        },
        'Variations_PropertySetOption': {
            'f': {
                'property_option_id': {
                    'v': 'public',
                    't': 'int'
                },
                'formatted_name': {
                    'v': 'public',
                    't': 'string'
                },
                'n': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'findAllSuggestedPropertyOptions': {
                    'u': '/property_options/suggested',
                    'p': {
                        'property_id': {
                            'r': true,
                            't': 'int'
                        },
                        'category_id': { 't': 'int' },
                        'recipient_id': { 't': 'int' },
                        'sizing_scale': { 't': 'int' },
                        'weight_scale': { 't': 'int' },
                        'height_scale': { 't': 'int' },
                        'length_scale': { 't': 'int' },
                        'width_scale': { 't': 'int' },
                        'diameter_scale': { 't': 'int' },
                        'dimensions_scale': { 't': 'int' }
                    },
                    'o': false
                }
            }
        },
        'Variations_PropertySetOptionModifier': {
            'f': {
                'prefix': {
                    'v': 'public',
                    't': 'string'
                },
                'suffix': {
                    'v': 'public',
                    't': 'string'
                }
            },
            'm': {
                'getPropertyOptionModifier': {
                    'u': '/property_options/modifiers',
                    'p': {
                        'property_id': {
                            'r': true,
                            't': 'int'
                        },
                        'category_id': { 't': 'int' },
                        'recipient_id': { 't': 'int' },
                        'sizing_scale': { 't': 'int' },
                        'weight_scale': { 't': 'int' },
                        'height_scale': { 't': 'int' },
                        'length_scale': { 't': 'int' },
                        'width_scale': { 't': 'int' },
                        'diameter_scale': { 't': 'int' },
                        'dimensions_scale': { 't': 'int' }
                    },
                    'o': false
                }
            }
        },
        'Variations_PropertySetProperty': {
            'f': {
                'property_id': {
                    'v': 'public',
                    't': 'int'
                },
                'input_name': {
                    'v': 'public',
                    't': 'string'
                },
                'label': {
                    'v': 'public',
                    't': 'string'
                },
                'param': {
                    'v': 'public',
                    't': 'string'
                },
                'default_option': {
                    'v': 'public',
                    't': 'string'
                },
                'is_custom': {
                    'v': 'public',
                    't': 'boolean'
                },
                'title': {
                    'v': 'public',
                    't': 'string'
                },
                'n': {
                    'v': 'public',
                    't': 'string'
                }
            }
        },
        'Variations_SelectedProperty': {
            'f': {
                'property_id': {
                    'v': 'public',
                    't': 'int'
                },
                'value_id': {
                    'v': 'public',
                    't': 'int'
                },
                'formatted_name': {
                    'v': 'public',
                    't': 'string'
                },
                'formatted_value': {
                    'v': 'public',
                    't': 'string'
                },
                'is_valid': {
                    'v': 'public',
                    't': 'boolean'
                }
            }
        }
    };
    exports.api_key = function(value) {
      if (value !== undefined) {
        return this.api_key;
      } else {
        this.api_key = val;
      }
    }
    exports.api = api;

    function getRequestToken(scope) {
      
    }

    for (var r in api) {
      exports[r] = (function (r) {
        return function() {
          console.log('I\'m an ' + r);
        }
      })(r);
      for (var m in api[r].m) {
        exports[r].prototype[m] = (function (m) {
          return function() {
            console.log('Method ' + m + ' was called!');
          }
        })(m);
      }
    }
}));
