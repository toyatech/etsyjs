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
    var r = [
            'ApiMethod',
            'Avatar',
            'BillCharge',
            'BillingOverview',
            'BillPayment',
            'Cart',
            'CartListing',
            'Category',
            'Country',
            'Coupon',
            'DataType',
            'FavoriteListing',
            'FavoriteUser',
            'FeaturedTreasury',
            'Feedback',
            'FeedbackInfo',
            'ForumPost',
            'Guest',
            'GuestCart',
            'ImageType',
            'Ledger',
            'LedgerEntry',
            'Listing',
            'ListingFile',
            'ListingImage',
            'ListingTranslation',
            'Manufacturer',
            'ParamList',
            'Payment',
            'PaymentAdjustment',
            'PaymentAdjustmentItem',
            'PaymentTemplate',
            'Receipt',
            'ReceiptShipment',
            'Region',
            'Segment',
            'SegmentPoster',
            'ShippingInfo',
            'ShippingOption',
            'ShippingTemplate',
            'ShippingTemplateEntry',
            'ShippingUpgrade',
            'Shop',
            'ShopAbout',
            'ShopAboutImage',
            'ShopAboutMember',
            'ShopSection',
            'ShopSectionTranslation',
            'ShopTranslation',
            'Style',
            'Team',
            'Transaction',
            'Treasury',
            'TreasuryCounts',
            'TreasuryListing',
            'TreasuryListingData',
            'User',
            'UserAddress',
            'UserProfile',
            'Variations_Option',
            'Variations_Property',
            'Variations_PropertyQualifier',
            'Variations_PropertySet',
            'Variations_PropertySetOption',
            'Variations_PropertySetOptionModifier',
            'Variations_PropertySetProperty',
            'Variations_SelectedProperty'
        ], ApiMethod_f = [
            {
                'n': 'name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'uri',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'params',
                't': 'ParamList',
                'v': 'public'
            },
            {
                'n': 'defaults',
                't': 'ParamList',
                'v': 'public'
            },
            {
                'n': 'type',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'visibility',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'http_method',
                't': 'string',
                'v': 'public'
            }
        ], ApiMethod_m = [{
                'n': 'getMethodTable',
                'u': '/',
                'o': false
            }], Avatar_f = [
            {
                'n': 'avatar_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'hex_code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'red',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'green',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'blue',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'hue',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'saturation',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'brightness',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'is_black_and_white',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'user_id',
                't': 'int',
                'v': 'public'
            }
        ], Avatar_m = [
            {
                'n': 'uploadAvatar',
                'u': '/users/:user_id/avatar',
                'm': 'POST',
                's': 'profile_w',
                'p': [
                    {
                        'n': 'src',
                        't': 'string'
                    },
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'image',
                        't': 'image'
                    }
                ]
            },
            {
                'n': 'getAvatarImgSrc',
                'u': '/users/:user_id/avatar/src',
                'o': false,
                'p': [{
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    }]
            }
        ], BillCharge_f = [
            {
                'n': 'bill_charge_id',
                't': 'int',
                's': 'billing_r'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                's': 'billing_r'
            },
            {
                'n': 'type',
                't': 'string',
                's': 'billing_r'
            },
            {
                'n': 'type_id',
                't': 'int',
                's': 'billing_r'
            },
            {
                'n': 'user_id',
                't': 'int',
                's': 'billing_r'
            },
            {
                'n': 'amount',
                't': 'float',
                's': 'billing_r'
            },
            {
                'n': 'currency_code',
                't': 'string',
                's': 'billing_r'
            },
            {
                'n': 'creation_year',
                't': 'int',
                's': 'billing_r'
            },
            {
                'n': 'creation_month',
                't': 'int',
                's': 'billing_r'
            },
            {
                'n': 'last_modified_tsz',
                't': 'float',
                's': 'billing_r'
            }
        ], BillCharge_m = [
            {
                'n': 'getUserChargesMetadata',
                'u': '/users/:user_id/charges/meta',
                's': 'billing_r',
                'p': [{
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    }]
            },
            {
                'n': 'findAllUserCharges',
                'u': '/users/:user_id/charges',
                's': 'billing_r',
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'sort_order',
                        't': 'enum(up, down)',
                        'd': 'up'
                    },
                    {
                        'n': 'min_created',
                        't': 'epoch'
                    },
                    {
                        'n': 'max_created',
                        't': 'epoch'
                    }
                ]
            }
        ], BillingOverview_f = [
            {
                'n': 'is_overdue',
                't': 'boolean',
                's': 'billing_r'
            },
            {
                'n': 'currency_code',
                't': 'string',
                's': 'billing_r'
            },
            {
                'n': 'overdue_balance',
                't': 'float',
                's': 'billing_r'
            },
            {
                'n': 'balance_due',
                't': 'float',
                's': 'billing_r'
            },
            {
                'n': 'total_balance',
                't': 'float',
                's': 'billing_r'
            },
            {
                'n': 'date_due',
                't': 'epoch',
                's': 'billing_r'
            },
            {
                'n': 'date_overdue',
                't': 'epoch',
                's': 'billing_r'
            }
        ], BillingOverview_m = [{
                'n': 'getUserBillingOverview',
                'u': '/users/:user_id/billing/overview',
                's': 'billing_r',
                'p': [{
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    }]
            }], BillPayment_f = [
            {
                'n': 'bill_payment_id',
                't': 'int',
                's': 'billing_r'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                's': 'billing_r'
            },
            {
                'n': 'type',
                't': 'string',
                's': 'billing_r'
            },
            {
                'n': 'type_id',
                't': 'int',
                's': 'billing_r'
            },
            {
                'n': 'user_id',
                't': 'int',
                's': 'billing_r'
            },
            {
                'n': 'amount',
                't': 'float',
                's': 'billing_r'
            },
            {
                'n': 'currency_code',
                't': 'string',
                's': 'billing_r'
            },
            {
                'n': 'creation_month',
                't': 'int',
                's': 'billing_r'
            },
            {
                'n': 'creation_year',
                't': 'int',
                's': 'billing_r'
            }
        ], BillPayment_m = [{
                'n': 'findAllUserPayments',
                'u': '/users/:user_id/payments',
                's': 'billing_r',
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'sort_order',
                        't': 'enum(up, down)',
                        'd': 'up'
                    },
                    {
                        'n': 'min_created',
                        't': 'epoch'
                    },
                    {
                        'n': 'max_created',
                        't': 'epoch'
                    }
                ]
            }], Cart_f = [
            {
                'n': 'cart_id',
                't': 'int',
                's': 'cart_rw'
            },
            {
                'n': 'shop_name',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'message_to_seller',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'destination_country_id',
                't': 'int',
                's': 'cart_rw'
            },
            {
                'n': 'coupon_code',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'currency_code',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'total',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'subtotal',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'shipping_cost',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'tax_cost',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'discount_amount',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'shipping_discount_amount',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'tax_discount_amount',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'url',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'listings',
                't': 'array(CartListing)',
                's': 'cart_rw'
            },
            {
                'n': 'shipping_option',
                't': 'ShippingOption',
                's': 'cart_rw'
            }
        ], Cart_a = [
            {
                'n': 'Shop',
                't': 'Shop',
                's': 'cart_rw'
            },
            {
                'n': 'Listings',
                't': 'array(Listing)',
                's': 'cart_rw'
            },
            {
                'n': 'Coupon',
                't': 'Coupon',
                's': 'cart_rw'
            },
            {
                'n': 'ShippingOptions',
                't': 'array(ShippingOption)',
                's': 'cart_rw'
            }
        ], Cart_m = [
            {
                'n': 'getAllUserCarts',
                'u': '/users/:user_id/carts',
                's': 'cart_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '100'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'addToCart',
                'u': '/users/:user_id/carts',
                'm': 'POST',
                's': 'cart_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'quantity',
                        't': 'int',
                        'd': '1'
                    },
                    {
                        'n': 'selected_variations',
                        't': 'map(int, int)'
                    }
                ]
            },
            {
                'n': 'updateCartListingQuantity',
                'u': '/users/:user_id/carts',
                'm': 'PUT',
                's': 'cart_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'quantity',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'listing_customization_id',
                        't': 'int',
                        'd': '0'
                    }
                ]
            },
            {
                'n': 'removeCartListing',
                'u': '/users/:user_id/carts',
                'm': 'DELETE',
                's': 'cart_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'listing_customization_id',
                        't': 'int',
                        'd': '0'
                    }
                ]
            },
            {
                'n': 'getUserCart',
                'u': '/users/:user_id/carts/:cart_id',
                's': 'cart_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'cart_id',
                        't': 'cart_id',
                        'r': true
                    }
                ]
            },
            {
                'n': 'updateCart',
                'u': '/users/:user_id/carts/:cart_id',
                'm': 'PUT',
                's': 'cart_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'cart_id',
                        't': 'cart_id',
                        'r': true
                    },
                    {
                        'n': 'destination_country_id',
                        't': 'int'
                    },
                    {
                        'n': 'message_to_seller',
                        't': 'text'
                    },
                    {
                        'n': 'coupon_code',
                        't': 'string'
                    },
                    {
                        'n': 'shipping_option_id',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'deleteCart',
                'u': '/users/:user_id/carts/:cart_id',
                'm': 'DELETE',
                's': 'cart_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'cart_id',
                        't': 'cart_id',
                        'r': true
                    }
                ]
            },
            {
                'n': 'getUserCartForShop',
                'u': '/users/:user_id/carts/shop/:shop_id',
                's': 'cart_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    }
                ]
            }
        ], CartListing_f = [
            {
                'n': 'listing_id',
                't': 'int',
                's': 'cart_rw'
            },
            {
                'n': 'purchase_quantity',
                't': 'int',
                's': 'cart_rw'
            },
            {
                'n': 'purchase_state',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'is_digital',
                't': 'boolean',
                's': 'cart_rw'
            },
            {
                'n': 'file_data',
                't': 'string',
                's': 'cart_rw'
            },
            {
                'n': 'listing_customization_id',
                't': 'int',
                's': 'cart_rw'
            },
            {
                'n': 'variations_available',
                't': 'boolean',
                's': 'cart_rw'
            },
            {
                'n': 'has_variations',
                't': 'boolean',
                's': 'cart_rw'
            },
            {
                'n': 'selected_variations',
                't': 'array(Variations_SelectedProperty)',
                's': 'cart_rw'
            }
        ], Category_f = [
            {
                'n': 'category_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'meta_title',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'meta_keywords',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'meta_description',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'page_description',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'page_title',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'category_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'short_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'long_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'num_children',
                't': 'int',
                'v': 'public'
            }
        ], Category_m = [
            {
                'n': 'getCategory',
                'u': '/categories/:tag',
                'o': false,
                'p': [{
                        'n': 'tag',
                        't': 'string',
                        'r': true
                    }]
            },
            {
                'n': 'findAllTopCategory',
                'u': '/taxonomy/categories',
                'o': false
            },
            {
                'n': 'getSubCategory',
                'u': '/categories/:tag/:subtag',
                'o': false,
                'p': [
                    {
                        'n': 'tag',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'subtag',
                        't': 'string',
                        'r': true
                    }
                ]
            },
            {
                'n': 'getSubSubCategory',
                'u': '/categories/:tag/:subtag/:subsubtag',
                'o': false,
                'p': [
                    {
                        'n': 'tag',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'subtag',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'subsubtag',
                        't': 'string',
                        'r': true
                    }
                ]
            },
            {
                'n': 'findAllTopCategoryChildren',
                'u': '/taxonomy/categories/:tag',
                'o': false,
                'p': [{
                        'n': 'tag',
                        't': 'string',
                        'r': true
                    }]
            },
            {
                'n': 'findAllSubCategoryChildren',
                'u': '/taxonomy/categories/:tag/:subtag',
                'o': false,
                'p': [
                    {
                        'n': 'tag',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'subtag',
                        't': 'string',
                        'r': true
                    }
                ]
            }
        ], Country_f = [
            {
                'n': 'country_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'iso_country_code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'world_bank_country_code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'slug',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'lat',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'lon',
                't': 'float',
                'v': 'public'
            }
        ], Country_m = [
            {
                'n': 'findAllCountry',
                'u': '/countries',
                'o': false
            },
            {
                'n': 'getCountry',
                'u': '/countries/:country_id',
                'o': false,
                'p': [{
                        'n': 'country_id',
                        't': 'array(int)',
                        'r': true
                    }]
            },
            {
                'n': 'findByIsoCode',
                'u': '/countries/iso/:iso_code',
                'o': false,
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'iso_code',
                        't': 'string',
                        'r': true
                    }
                ]
            }
        ], Coupon_f = [
            {
                'n': 'coupon_id',
                't': 'int',
                's': 'shops_rw'
            },
            {
                'n': 'coupon_code',
                't': 'string',
                's': 'shops_rw'
            },
            {
                'n': 'seller_active',
                't': 'boolean',
                's': 'shops_rw'
            },
            {
                'n': 'pct_discount',
                't': 'int',
                's': 'shops_rw'
            },
            {
                'n': 'free_shipping',
                't': 'boolean',
                's': 'shops_rw'
            },
            {
                'n': 'domestic_only',
                't': 'boolean',
                's': 'shops_rw'
            },
            {
                'n': 'currency_code',
                't': 'string',
                's': 'shops_rw'
            },
            {
                'n': 'fixed_discount',
                't': 'string',
                's': 'shops_rw'
            },
            {
                'n': 'minimum_purchase_price',
                't': 'string',
                's': 'shops_rw'
            },
            {
                'n': 'expiration_date',
                't': 'int',
                's': 'shops_rw'
            },
            {
                'n': 'coupon_type',
                't': 'string',
                's': 'shops_rw'
            }
        ], Coupon_m = [
            {
                'n': 'findAllShopCoupons',
                'u': '/shops/:shop_id/coupons',
                's': 'shops_rw',
                'p': [{
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    }]
            },
            {
                'n': 'createCoupon',
                'u': '/shops/:shop_id/coupons',
                'm': 'POST',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'coupon_code',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'pct_discount',
                        't': 'int'
                    },
                    {
                        'n': 'seller_active',
                        't': 'boolean',
                        'd': 'false'
                    },
                    {
                        'n': 'free_shipping',
                        't': 'boolean',
                        'd': 'false'
                    },
                    {
                        'n': 'domestic_only',
                        't': 'boolean',
                        'd': 'false'
                    },
                    {
                        'n': 'currency_code',
                        't': 'string',
                        'd': 'USD'
                    },
                    {
                        'n': 'fixed_discount',
                        't': 'string'
                    },
                    {
                        'n': 'minimum_purchase_price',
                        't': 'string'
                    },
                    {
                        'n': 'expiration_date',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findCoupon',
                'u': '/shops/:shop_id/coupons/:coupon_id',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'coupon_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'updateCoupon',
                'u': '/shops/:shop_id/coupons/:coupon_id',
                'm': 'PUT',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'coupon_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'seller_active',
                        't': 'boolean',
                        'd': 'false'
                    }
                ]
            },
            {
                'n': 'deleteCoupon',
                'u': '/shops/:shop_id/coupons/:coupon_id',
                'm': 'DELETE',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'coupon_id',
                        't': 'int',
                        'r': true
                    }
                ]
            }
        ], DataType_f = [
            {
                'n': 'type',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'values',
                't': 'string',
                'v': 'public'
            }
        ], DataType_m = [
            {
                'n': 'describeOccasionEnum',
                'u': '/types/enum/occasion',
                'o': false
            },
            {
                'n': 'describeRecipientEnum',
                'u': '/types/enum/recipient',
                'o': false
            },
            {
                'n': 'describeWhenMadeEnum',
                'u': '/types/enum/when_made',
                'o': false,
                'p': [{
                        'n': 'include_formatted',
                        't': 'boolean'
                    }]
            },
            {
                'n': 'describeWhoMadeEnum',
                'u': '/types/enum/who_made',
                'o': false
            }
        ], FavoriteListing_f = [
            {
                'n': 'listing_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'user_id',
                't': 'int',
                'v': 'public/private',
                's': 'favorites_rw'
            },
            {
                'n': 'listing_state',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'create_date',
                't': 'int',
                'v': 'public'
            }
        ], FavoriteListing_a = [
            {
                'n': 'User',
                't': 'User',
                'v': 'public/private',
                's': 'favorites_rw'
            },
            {
                'n': 'Listing',
                't': 'Listing',
                'v': 'public'
            }
        ], FavoriteListing_m = [
            {
                'n': 'findAllListingFavoredBy',
                'u': '/listings/:listing_id/favored-by',
                'o': false,
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllUserFavoriteListings',
                'u': '/users/:user_id/favorites/listings',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findUserFavoriteListings',
                'u': '/users/:user_id/favorites/listings/:listing_id',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'createUserFavoriteListings',
                'u': '/users/:user_id/favorites/listings/:listing_id',
                'm': 'POST',
                's': 'favorites_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'deleteUserFavoriteListings',
                'u': '/users/:user_id/favorites/listings/:listing_id',
                'm': 'DELETE',
                's': 'favorites_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }
                ]
            }
        ], FavoriteUser_f = [
            {
                'n': 'user_id',
                't': 'int',
                'v': 'public/private',
                's': 'favorites_rw'
            },
            {
                'n': 'favorite_user_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'target_user_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                'v': 'public'
            }
        ], FavoriteUser_a = [
            {
                'n': 'User',
                't': 'User',
                'v': 'public/private',
                's': 'favorites_rw'
            },
            {
                'n': 'TargetUser',
                't': 'User',
                'v': 'public'
            }
        ], FavoriteUser_m = [
            {
                'n': 'findAllUserFavoredBy',
                'u': '/users/:user_id/favored-by',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllUserFavoriteUsers',
                'u': '/users/:user_id/favorites/users',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findUserFavoriteUsers',
                'u': '/users/:user_id/favorites/users/:target_user_id',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'target_user_id',
                        't': 'user_id_or_name',
                        'r': true
                    }
                ]
            },
            {
                'n': 'createUserFavoriteUsers',
                'u': '/users/:user_id/favorites/users/:target_user_id',
                'm': 'POST',
                's': 'favorites_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'target_user_id',
                        't': 'user_id_or_name',
                        'r': true
                    }
                ]
            },
            {
                'n': 'deleteUserFavoriteUsers',
                'u': '/users/:user_id/favorites/users/:target_user_id',
                'm': 'DELETE',
                's': 'favorites_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'target_user_id',
                        't': 'user_id_or_name',
                        'r': true
                    }
                ]
            }
        ], FeaturedTreasury_f = [
            {
                'n': 'treasury_key',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'treasury_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'treasury_owner_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'url',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'region',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'active_date',
                't': 'float',
                'v': 'public'
            }
        ], FeaturedTreasury_m = [
            {
                'n': 'findAllFeaturedTreasuries',
                'u': '/featured_treasuries',
                'o': false,
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'region',
                        't': 'region',
                        'd': '__ALL_REGIONS__'
                    }
                ]
            },
            {
                'n': 'getFeaturedTreasuryById',
                'u': '/featured_treasuries/:featured_treasury_id',
                'o': false,
                'p': [{
                        'n': 'featured_treasury_id',
                        't': 'int',
                        'r': true
                    }]
            },
            {
                'n': 'findAllFeaturedTreasuriesByOwner',
                'u': '/featured_treasuries/owner/:owner_id',
                'o': false,
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'owner_id',
                        't': 'int',
                        'r': true
                    }
                ]
            }
        ], Feedback_f = [
            {
                'n': 'feedback_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'transaction_id',
                't': 'int',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'creator_user_id',
                't': 'int',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'target_user_id',
                't': 'int',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'seller_user_id',
                't': 'int',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'buyer_user_id',
                't': 'int',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'message',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'value',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'image_feedback_id',
                't': 'int',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'image_url_25x25',
                't': 'string',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'image_url_155x125',
                't': 'string',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'image_url_fullxfull',
                't': 'string',
                'v': 'public/private',
                's': 'feedback_r'
            }
        ], Feedback_a = [
            {
                'n': 'Buyer',
                't': 'User',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'Seller',
                't': 'User',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'Author',
                't': 'User',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'Subject',
                't': 'User',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'Transaction',
                't': 'Transaction',
                'v': 'public/private',
                's': 'feedback_r'
            },
            {
                'n': 'Listing',
                't': 'Listing',
                'v': 'public/private',
                's': 'feedback_r'
            }
        ], Feedback_m = [
            {
                'n': 'findAllUserFeedbackAsAuthor',
                'u': '/users/:user_id/feedback/as-author',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllUserFeedbackAsBuyer',
                'u': '/users/:user_id/feedback/as-buyer',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllUserFeedbackAsSeller',
                'u': '/users/:user_id/feedback/as-seller',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllUserFeedbackAsSubject',
                'u': '/users/:user_id/feedback/as-subject',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllFeedbackFromBuyers',
                'u': '/users/:user_id/feedback/from-buyers',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name'
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllFeedbackFromSellers',
                'u': '/users/:user_id/feedback/from-sellers',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name'
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            }
        ], FeedbackInfo_f = [
            {
                'n': 'count',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'score',
                't': 'int',
                'v': 'public'
            }
        ], ForumPost_f = [
            {
                'n': 'thread_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'post_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'post',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'user_id',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'last_edit_time',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'create_date',
                't': 'int',
                'v': 'public'
            }
        ], ForumPost_m = [
            {
                'n': 'findTreasuryComments',
                'u': '/treasuries/:treasury_key/comments',
                'o': false,
                'p': [
                    {
                        'n': 'treasury_key',
                        't': 'treasury_id',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'postTreasuryComment',
                'u': '/treasuries/:treasury_key/comments',
                'm': 'POST',
                's': 'treasury_w',
                'p': [{
                        'n': 'message',
                        't': 'forum_post',
                        'r': true
                    }]
            },
            {
                'n': 'deleteTreasuryComment',
                'u': '/treasuries/:treasury_key/comments/:comment_id',
                'm': 'DELETE',
                's': 'treasury_w'
            }
        ], Guest_f = [
            {
                'n': 'guest_id',
                't': 'guest_id',
                'v': 'public'
            },
            {
                'n': 'checkout_url',
                't': 'string',
                'v': 'public'
            }
        ], Guest_m = [
            {
                'n': 'getGuest',
                'u': '/guests/:guest_id',
                'o': false,
                'p': [{
                        'n': 'guest_id',
                        't': 'guest_id',
                        'r': true
                    }]
            },
            {
                'n': 'generateGuest',
                'u': '/guests/generator',
                'o': false
            },
            {
                'n': 'claimGuest',
                'u': '/guests/:guest_id/claim',
                'm': 'POST',
                's': 'cart_rw',
                'p': [{
                        'n': 'guest_id',
                        't': 'guest_id',
                        'r': true
                    }]
            },
            {
                'n': 'mergeGuest',
                'u': '/guests/:guest_id/merge',
                'm': 'POST',
                'p': [
                    {
                        'n': 'guest_id',
                        't': 'guest_id',
                        'r': true
                    },
                    {
                        'n': 'target_guest_id',
                        't': 'guest_id',
                        'r': true
                    }
                ]
            }
        ], GuestCart_f = [
            {
                'n': 'cart_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'shop_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'message_to_seller',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'destination_country_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'coupon_code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'currency_code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'total',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'subtotal',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'shipping_cost',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'tax_cost',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'discount_amount',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'shipping_discount_amount',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'tax_discount_amount',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'url',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'listings',
                't': 'array(CartListing)',
                'v': 'public'
            },
            {
                'n': 'shipping_option',
                't': 'ShippingOption',
                'v': 'public'
            }
        ], GuestCart_a = [
            {
                'n': 'Shop',
                't': 'Shop',
                'v': 'public'
            },
            {
                'n': 'Listings',
                't': 'array(Listing)',
                'v': 'public'
            },
            {
                'n': 'Coupon',
                't': 'Coupon',
                'v': 'public'
            },
            {
                'n': 'ShippingOptions',
                't': 'array(ShippingOption)',
                'v': 'public'
            }
        ], GuestCart_m = [
            {
                'n': 'findAllGuestCarts',
                'u': '/guests/:guest_id/carts',
                'o': false,
                'p': [{
                        'n': 'guest_id',
                        't': 'guest_id',
                        'r': true
                    }]
            },
            {
                'n': 'addToGuestCart',
                'u': '/guests/:guest_id/carts',
                'm': 'POST',
                'o': false,
                'p': [
                    {
                        'n': 'guest_id',
                        't': 'guest_id',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'quantity',
                        't': 'int',
                        'd': '1'
                    },
                    {
                        'n': 'selected_variations',
                        't': 'map(int, int)'
                    }
                ]
            },
            {
                'n': 'updateGuestCartListingQuantity',
                'u': '/guests/:guest_id/carts',
                'm': 'PUT',
                'o': false,
                'p': [
                    {
                        'n': 'guest_id',
                        't': 'guest_id',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'quantity',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'listing_customization_id',
                        't': 'int',
                        'd': '0'
                    }
                ]
            },
            {
                'n': 'removeGuestCartListing',
                'u': '/guests/:guest_id/carts',
                'm': 'DELETE',
                'o': false,
                'p': [
                    {
                        'n': 'guest_id',
                        't': 'guest_id',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'listing_customization_id',
                        't': 'int',
                        'd': '0'
                    }
                ]
            },
            {
                'n': 'findGuestCart',
                'u': '/guests/:guest_id/carts/:cart_id',
                'o': false,
                'p': [
                    {
                        'n': 'guest_id',
                        't': 'guest_id',
                        'r': true
                    },
                    {
                        'n': 'cart_id',
                        't': 'cart_id',
                        'r': true
                    }
                ]
            },
            {
                'n': 'updateGuestCart',
                'u': '/guests/:guest_id/carts/:cart_id',
                'm': 'PUT',
                'o': false,
                'p': [
                    {
                        'n': 'guest_id',
                        't': 'guest_id',
                        'r': true
                    },
                    {
                        'n': 'cart_id',
                        't': 'cart_id',
                        'r': true
                    },
                    {
                        'n': 'destination_country_id',
                        't': 'int'
                    },
                    {
                        'n': 'message_to_seller',
                        't': 'string'
                    },
                    {
                        'n': 'coupon_code',
                        't': 'string'
                    }
                ]
            },
            {
                'n': 'deleteGuestCart',
                'u': '/guests/:guest_id/carts/:cart_id',
                'm': 'DELETE',
                'o': false,
                'p': [
                    {
                        'n': 'guest_id',
                        't': 'guest_id',
                        'r': true
                    },
                    {
                        'n': 'cart_id',
                        't': 'cart_id',
                        'r': true
                    }
                ]
            }
        ], ImageType_f = [
            {
                'n': 'code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'desc',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'sizes',
                't': 'string',
                'v': 'public'
            }
        ], ImageType_m = [{
                'n': 'listImageTypes',
                'u': '/image_types',
                'o': false
            }], Ledger_f = [
            {
                'n': 'ledger_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'shop_id',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'currency',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'create_date',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'update_date',
                't': 'int',
                's': 'transactions_r'
            }
        ], Ledger_m = [{
                'n': 'findLedger',
                'u': '/shops/:shop_id/ledger/',
                's': 'transactions_r',
                'p': [{
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    }]
            }], LedgerEntry_f = [
            {
                'n': 'ledger_entry_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'ledger_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'sequence',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'credit_amount',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'debit_amount',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'entry_type',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'reference_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'running_balance',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'create_date',
                't': 'int',
                's': 'transactions_r'
            }
        ], LedgerEntry_m = [{
                'n': 'findLedgerEntries',
                'u': '/shops/:shop_id/ledger/entries',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'min_created',
                        't': 'epoch'
                    },
                    {
                        'n': 'max_created',
                        't': 'epoch'
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            }], Listing_f = [
            {
                'n': 'listing_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'state',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'user_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'category_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'title',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'description',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'ending_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'original_creation_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'last_modified_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'price',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'currency_code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'quantity',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'tags',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'category_path',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'category_path_ids',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'materials',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'shop_section_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'featured_rank',
                't': 'featured_rank',
                'v': 'public'
            },
            {
                'n': 'state_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'url',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'views',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'num_favorers',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'shipping_template_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'shipping_profile_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'processing_min',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'processing_max',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'who_made',
                't': 'enum',
                'v': 'public'
            },
            {
                'n': 'is_supply',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'when_made',
                't': 'enum',
                'v': 'public'
            },
            {
                'n': 'is_private',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'recipient',
                't': 'enum',
                'v': 'public'
            },
            {
                'n': 'occasion',
                't': 'enum',
                'v': 'public'
            },
            {
                'n': 'style',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'non_taxable',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'is_customizable',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'is_digital',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'file_data',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'has_variations',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'language',
                't': 'language',
                'v': 'public'
            }
        ], Listing_a = [
            {
                'n': 'User',
                't': 'User',
                'v': 'public'
            },
            {
                'n': 'Shop',
                't': 'Shop',
                'v': 'public'
            },
            {
                'n': 'Section',
                't': 'ShopSection',
                'v': 'public'
            },
            {
                'n': 'Images',
                't': 'array(ListingImage)',
                'v': 'public'
            },
            {
                'n': 'MainImage',
                't': 'ListingImage',
                'v': 'public'
            },
            {
                'n': 'ShippingInfo',
                't': 'array(ShippingInfo)',
                'v': 'public'
            },
            {
                'n': 'ShippingTemplate',
                't': 'ShippingTemplate',
                'v': 'public'
            },
            {
                'n': 'ShippingUpgrades',
                't': 'array(ShippingUpgrade)',
                'v': 'public'
            },
            {
                'n': 'PaymentInfo',
                't': 'array(PaymentTemplate)',
                'v': 'public'
            },
            {
                'n': 'Translations',
                't': 'array(ListingTranslation)',
                'v': 'public'
            },
            {
                'n': 'Manufacturers',
                't': 'array(Manufacturer)',
                'v': 'public'
            },
            {
                'n': 'Variations',
                't': 'array(Variations_Property)',
                'v': 'public'
            }
        ], Listing_m = [
            {
                'n': 'createListing',
                'u': '/listings',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'quantity',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'title',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'description',
                        't': 'text',
                        'r': true
                    },
                    {
                        'n': 'price',
                        't': 'float',
                        'r': true
                    },
                    {
                        'n': 'materials',
                        't': 'array(string)'
                    },
                    {
                        'n': 'shipping_template_id',
                        't': 'int'
                    },
                    {
                        'n': 'shop_section_id',
                        't': 'int'
                    },
                    {
                        'n': 'image_ids',
                        't': 'array(int)'
                    },
                    {
                        'n': 'is_customizable',
                        't': 'boolean'
                    },
                    {
                        'n': 'non_taxable',
                        't': 'boolean'
                    },
                    {
                        'n': 'image',
                        't': 'image'
                    },
                    {
                        'n': 'state',
                        't': 'enum(active, draft)',
                        'd': 'active'
                    },
                    {
                        'n': 'processing_min',
                        't': 'int'
                    },
                    {
                        'n': 'processing_max',
                        't': 'int'
                    },
                    {
                        'n': 'category_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'tags',
                        't': 'array(string)'
                    },
                    {
                        'n': 'who_made',
                        't': 'enum(i_did, collective, someone_else)',
                        'r': true
                    },
                    {
                        'n': 'is_supply',
                        't': 'boolean',
                        'r': true
                    },
                    {
                        'n': 'when_made',
                        't': 'enum(made_to_order, 2010_2014, 2000_2009, 1995_1999, before_1995, 1990_1994, 1980s, 1970s, 1960s, 1950s, 1940s, 1930s, 1920s, 1910s, 1900s, 1800s, 1700s, before_1700)',
                        'r': true
                    },
                    {
                        'n': 'recipient',
                        't': 'enum(men, women, unisex_adults, teen_boys, teen_girls, teens, boys, girls, children, baby_boys, baby_girls, babies, birds, cats, dogs, pets)'
                    },
                    {
                        'n': 'occasion',
                        't': 'enum(anniversary, baptism, bar_or_bat_mitzvah, birthday, canada_day, chinese_new_year, cinco_de_mayo, confirmation, christmas, day_of_the_dead, easter, eid, engagement, fathers_day, get_well, graduation, halloween, hanukkah, housewarming, kwanzaa, prom, july_4th, mothers_day, new_baby, new_years, quinceanera, retirement, st_patricks_day, sweet_16, sympathy, thanksgiving, valentines, wedding)'
                    },
                    {
                        'n': 'style',
                        't': 'array(string)'
                    }
                ]
            },
            {
                'n': 'findAllFeaturedListings',
                'u': '/featured_treasuries/listings',
                'o': false,
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'region',
                        't': 'region',
                        'd': '__ALL_REGIONS__'
                    }
                ]
            },
            {
                'n': 'getListing',
                'u': '/listings/:listing_id',
                'o': false,
                'p': [{
                        'n': 'listing_id',
                        't': 'array(int)',
                        'r': true
                    }]
            },
            {
                'n': 'updateListing',
                'u': '/listings/:listing_id',
                'm': 'PUT',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'quantity',
                        't': 'int'
                    },
                    {
                        'n': 'title',
                        't': 'string'
                    },
                    {
                        'n': 'description',
                        't': 'text'
                    },
                    {
                        'n': 'price',
                        't': 'float'
                    },
                    {
                        'n': 'wholesale_price',
                        't': 'float'
                    },
                    {
                        'n': 'materials',
                        't': 'array(string)'
                    },
                    {
                        'n': 'renew',
                        't': 'boolean'
                    },
                    {
                        'n': 'shipping_template_id',
                        't': 'int'
                    },
                    {
                        'n': 'shop_section_id',
                        't': 'int'
                    },
                    {
                        'n': 'state',
                        't': 'enum(active, inactive, draft)',
                        'd': 'active'
                    },
                    {
                        'n': 'image_ids',
                        't': 'array(int)'
                    },
                    {
                        'n': 'is_customizable',
                        't': 'boolean'
                    },
                    {
                        'n': 'non_taxable',
                        't': 'boolean'
                    },
                    {
                        'n': 'category_id',
                        't': 'int'
                    },
                    {
                        'n': 'tags',
                        't': 'array(string)'
                    },
                    {
                        'n': 'who_made',
                        't': 'enum(i_did, collective, someone_else)'
                    },
                    {
                        'n': 'is_supply',
                        't': 'boolean'
                    },
                    {
                        'n': 'when_made',
                        't': 'enum(made_to_order, 2010_2014, 2000_2009, 1995_1999, before_1995, 1990_1994, 1980s, 1970s, 1960s, 1950s, 1940s, 1930s, 1920s, 1910s, 1900s, 1800s, 1700s, before_1700)'
                    },
                    {
                        'n': 'recipient',
                        't': 'enum(men, women, unisex_adults, teen_boys, teen_girls, teens, boys, girls, children, baby_boys, baby_girls, babies, birds, cats, dogs, pets)'
                    },
                    {
                        'n': 'occasion',
                        't': 'enum(anniversary, baptism, bar_or_bat_mitzvah, birthday, canada_day, chinese_new_year, cinco_de_mayo, confirmation, christmas, day_of_the_dead, easter, eid, engagement, fathers_day, get_well, graduation, halloween, hanukkah, housewarming, kwanzaa, prom, july_4th, mothers_day, new_baby, new_years, quinceanera, retirement, st_patricks_day, sweet_16, sympathy, thanksgiving, valentines, wedding)'
                    },
                    {
                        'n': 'style',
                        't': 'array(string)'
                    },
                    {
                        'n': 'processing_min',
                        't': 'int'
                    },
                    {
                        'n': 'processing_max',
                        't': 'int'
                    },
                    {
                        'n': 'featured_rank',
                        't': 'featured_rank'
                    }
                ]
            },
            {
                'n': 'deleteListing',
                'u': '/listings/:listing_id',
                'm': 'DELETE',
                's': 'listings_d',
                'p': [{
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }]
            },
            {
                'n': 'findAllListingActive',
                'u': '/listings/active',
                'o': false,
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'keywords',
                        't': 'text'
                    },
                    {
                        'n': 'sort_on',
                        't': 'enum(created, price, score)',
                        'd': 'created'
                    },
                    {
                        'n': 'sort_order',
                        't': 'enum(up, down)',
                        'd': 'down'
                    },
                    {
                        'n': 'min_price',
                        't': 'float'
                    },
                    {
                        'n': 'max_price',
                        't': 'float'
                    },
                    {
                        'n': 'color',
                        't': 'color_triplet'
                    },
                    {
                        'n': 'color_accuracy',
                        't': 'color_wiggle',
                        'd': '0'
                    },
                    {
                        'n': 'tags',
                        't': 'array(string)'
                    },
                    {
                        'n': 'category',
                        't': 'category'
                    },
                    {
                        'n': 'location',
                        't': 'string'
                    },
                    {
                        'n': 'lat',
                        't': 'latitude'
                    },
                    {
                        'n': 'lon',
                        't': 'longitude'
                    },
                    {
                        'n': 'region',
                        't': 'region'
                    },
                    {
                        'n': 'geo_level',
                        't': 'enum(city, state, country)',
                        'd': 'city'
                    },
                    {
                        'n': 'accepts_gift_cards',
                        't': 'boolean',
                        'd': 'false'
                    },
                    {
                        'n': 'translate_keywords',
                        't': 'boolean',
                        'd': 'false'
                    }
                ]
            },
            {
                'n': 'getInterestingListings',
                'u': '/listings/interesting',
                'o': false,
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'getTrendingListings',
                'u': '/listings/trending',
                'o': false,
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findBrowseSegmentListings',
                'u': '/segments/listings',
                'o': false,
                'p': [
                    {
                        'n': 'path',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'keywords',
                        't': 'text'
                    },
                    {
                        'n': 'sort_on',
                        't': 'enum(created, price, score)',
                        'd': 'created'
                    },
                    {
                        'n': 'sort_order',
                        't': 'enum(up, down)',
                        'd': 'down'
                    },
                    {
                        'n': 'min_price',
                        't': 'float'
                    },
                    {
                        'n': 'max_price',
                        't': 'float'
                    },
                    {
                        'n': 'ship_to',
                        't': 'string'
                    },
                    {
                        'n': 'location',
                        't': 'string'
                    },
                    {
                        'n': 'lat',
                        't': 'latitude'
                    },
                    {
                        'n': 'lon',
                        't': 'longitude'
                    },
                    {
                        'n': 'geo_level',
                        't': 'enum(city, state, country)',
                        'd': 'city'
                    },
                    {
                        'n': 'accepts_gift_cards',
                        't': 'boolean',
                        'd': 'false'
                    }
                ]
            },
            {
                'n': 'findAllListingsForFeaturedTreasuryId',
                'u': '/featured_treasuries/:featured_treasury_id/listings',
                'o': false,
                'p': [{
                        'n': 'featured_treasury_id',
                        't': 'int',
                        'r': true
                    }]
            },
            {
                'n': 'findAllActiveListingsForFeaturedTreasuryId',
                'u': '/featured_treasuries/:featured_treasury_id/listings/active',
                'o': false,
                'p': [{
                        'n': 'featured_treasury_id',
                        't': 'int',
                        'r': true
                    }]
            },
            {
                'n': 'findAllCurrentFeaturedListings',
                'u': '/featured_treasuries/listings/homepage_current',
                'o': false,
                'p': [{
                        'n': 'region',
                        't': 'region',
                        'd': 'US'
                    }]
            },
            {
                'n': 'findAllReceiptListings',
                'u': '/receipts/:receipt_id/listings',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'receipt_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'findAllShopListingsActive',
                'u': '/shops/:shop_id/listings/active',
                'o': false,
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'keywords',
                        't': 'string'
                    },
                    {
                        'n': 'sort_on',
                        't': 'enum(created, price, score)',
                        'd': 'created'
                    },
                    {
                        'n': 'sort_order',
                        't': 'enum(up, down)',
                        'd': 'down'
                    },
                    {
                        'n': 'min_price',
                        't': 'float'
                    },
                    {
                        'n': 'max_price',
                        't': 'float'
                    },
                    {
                        'n': 'color',
                        't': 'color_triplet'
                    },
                    {
                        'n': 'color_accuracy',
                        't': 'color_wiggle',
                        'd': '0'
                    },
                    {
                        'n': 'tags',
                        't': 'array(string)'
                    },
                    {
                        'n': 'category',
                        't': 'category'
                    },
                    {
                        'n': 'translate_keywords',
                        't': 'boolean',
                        'd': 'false'
                    },
                    {
                        'n': 'include_private',
                        't': 'boolean',
                        'd': '0'
                    }
                ]
            },
            {
                'n': 'findAllShopListingsDraft',
                'u': '/shops/:shop_id/listings/draft',
                's': 'listings_r',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllShopListingsExpired',
                'u': '/shops/:shop_id/listings/expired',
                's': 'listings_r',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'getShopListingExpired',
                'u': '/shops/:shop_id/listings/expired/:listing_id',
                's': 'listings_r',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'findAllShopListingsFeatured',
                'u': '/shops/:shop_id/listings/featured',
                'o': false,
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllShopListingsInactive',
                'u': '/shops/:shop_id/listings/inactive',
                's': 'listings_r',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'getShopListingInactive',
                'u': '/shops/:shop_id/listings/inactive/:listing_id',
                's': 'listings_r',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'findAllShopSectionListings',
                'u': '/shops/:shop_id/sections/:shop_section_id/listings',
                'o': false,
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'shop_section_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'findAllShopSectionListingsActive',
                'u': '/shops/:shop_id/sections/:shop_section_id/listings/active',
                'o': false,
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'shop_section_id',
                        't': 'array(int)',
                        'r': true
                    },
                    {
                        'n': 'sort_on',
                        't': 'enum(created, price)',
                        'd': 'created'
                    },
                    {
                        'n': 'sort_order',
                        't': 'enum(up, down)',
                        'd': 'down'
                    }
                ]
            },
            {
                'n': 'findAllCartListings',
                'u': '/users/:user_id/carts/:cart_id/listings',
                's': 'cart_rw',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'cart_id',
                        't': 'cart_id',
                        'r': true
                    }
                ]
            }
        ], ListingFile_f = [
            {
                'n': 'listing_file_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'listing_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'rank',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'filename',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'filesize',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'size_bytes',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'filetype',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'create_date',
                't': 'int',
                'v': 'public'
            }
        ], ListingFile_m = [
            {
                'n': 'findAllListingFiles',
                'u': '/listings/:listing_id/files',
                's': 'listings_r',
                'p': [{
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }]
            },
            {
                'n': 'uploadListingFile',
                'u': '/listings/:listing_id/files',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'listing_file_id',
                        't': 'int'
                    },
                    {
                        'n': 'file',
                        't': 'imagefile'
                    },
                    {
                        'n': 'name',
                        't': 'string'
                    },
                    {
                        'n': 'rank',
                        't': 'int',
                        'd': '1'
                    }
                ]
            },
            {
                'n': 'findListingFile',
                'u': '/listings/:listing_id/files/:listing_file_id',
                's': 'listings_r',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'listing_file_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'deleteListingFile',
                'u': '/listings/:listing_id/files/:listing_file_id',
                'm': 'DELETE',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'listing_file_id',
                        't': 'int',
                        'r': true
                    }
                ]
            }
        ], ListingImage_f = [
            {
                'n': 'listing_image_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'hex_code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'red',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'green',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'blue',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'hue',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'saturation',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'brightness',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'is_black_and_white',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'listing_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'rank',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'url_75x75',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'url_170x135',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'url_570xN',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'url_fullxfull',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'full_height',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'full_width',
                't': 'int',
                'v': 'public'
            }
        ], ListingImage_a = [{
                'n': 'Listing',
                't': 'Listing',
                'v': 'public'
            }], ListingImage_m = [
            {
                'n': 'findAllListingImages',
                'u': '/listings/:listing_id/images',
                'o': false,
                'p': [{
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }]
            },
            {
                'n': 'uploadListingImage',
                'u': '/listings/:listing_id/images',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'listing_image_id',
                        't': 'int'
                    },
                    {
                        'n': 'image',
                        't': 'imagefile'
                    },
                    {
                        'n': 'rank',
                        't': 'int',
                        'd': '1'
                    },
                    {
                        'n': 'overwrite',
                        't': 'boolean',
                        'd': '0'
                    }
                ]
            },
            {
                'n': 'getImage_Listing',
                'u': '/listings/:listing_id/images/:listing_image_id',
                'o': false,
                'p': [
                    {
                        'n': 'listing_image_id',
                        't': 'array(int)',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'deleteListingImage',
                'u': '/listings/:listing_id/images/:listing_image_id',
                'm': 'DELETE',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'listing_image_id',
                        't': 'int',
                        'r': true
                    }
                ]
            }
        ], ListingTranslation_f = [
            {
                'n': 'listing_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'language',
                't': 'language',
                'v': 'public'
            },
            {
                'n': 'title',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'description',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'tags',
                't': 'string',
                'v': 'public'
            }
        ], ListingTranslation_m = [
            {
                'n': 'getListingTranslation',
                'u': '/listings/:listing_id/translations/:language',
                'o': false,
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    }
                ]
            },
            {
                'n': 'createListingTranslation',
                'u': '/listings/:listing_id/translations/:language',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    },
                    {
                        'n': 'title',
                        't': 'string'
                    },
                    {
                        'n': 'description',
                        't': 'string'
                    },
                    {
                        'n': 'tags',
                        't': 'array(string)'
                    }
                ]
            },
            {
                'n': 'updateListingTranslation',
                'u': '/listings/:listing_id/translations/:language',
                'm': 'PUT',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    },
                    {
                        'n': 'title',
                        't': 'string'
                    },
                    {
                        'n': 'description',
                        't': 'string'
                    },
                    {
                        'n': 'tags',
                        't': 'array(string)'
                    }
                ]
            },
            {
                'n': 'deleteListingTranslation',
                'u': '/listings/:listing_id/translations/:language',
                'm': 'DELETE',
                's': 'listings_d',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    }
                ]
            }
        ], Manufacturer_f = [
            {
                'n': 'name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'description',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'location',
                't': 'string',
                'v': 'public'
            }
        ], Manufacturer_a = [{
                'n': 'Shop',
                't': 'Shop',
                'v': 'public'
            }], ParamList_f = [{
                'n': 'param_name',
                't': 'string',
                'v': 'public'
            }], Payment_f = [
            {
                'n': 'payment_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'buyer_user_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'shop_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'receipt_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'amount_gross',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'amount_fees',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'amount_net',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'posted_gross',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'posted_fees',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'posted_net',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'adjusted_gross',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'adjusted_fees',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'adjusted_net',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'currency',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'shipping_user_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'shipping_address_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'billing_address_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'status',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'shipped_date',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'create_date',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'update_date',
                't': 'int',
                's': 'transactions_r'
            }
        ], Payment_m = [
            {
                'n': 'findPayment',
                'u': '/payments/:payment_id',
                's': 'transactions_r',
                'p': [{
                        'n': 'payment_id',
                        't': 'array(int)',
                        'r': true
                    }]
            },
            {
                'n': 'findShopPaymentByReceipt',
                'u': '/shops/:shop_id/receipts/:receipt_id/payments',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'receipt_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    }
                ]
            }
        ], PaymentAdjustment_f = [
            {
                'n': 'payment_adjustment_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'payment_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'status',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'user_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'reason_code',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'total_adjustment_amount',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'total_fee_adjustment_amount',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'create_date',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'update_date',
                't': 'int',
                's': 'transactions_r'
            }
        ], PaymentAdjustment_m = [
            {
                'n': 'findPaymentAdjustments',
                'u': '/payments/:payment_id/adjustments',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'payment_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findPaymentAdjustment',
                'u': '/payments/:payment_id/adjustments/:payment_adjustment_id',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'payment_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'payment_adjustment_id',
                        't': 'int',
                        'r': true
                    }
                ]
            }
        ], PaymentAdjustmentItem_f = [
            {
                'n': 'payment_adjustment_item_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'payment_adjustment_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'adjustment_type',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'amount',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'transaction_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'create_date',
                't': 'int',
                's': 'transactions_r'
            }
        ], PaymentAdjustmentItem_m = [
            {
                'n': 'findPaymentAdjustmentItem',
                'u': '/payments/:payment_id/adjustments/:payment_adjustment_id/items',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'payment_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'payment_adjustment_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findPaymentAdjustmentItem',
                'u': '/payments/:payment_id/adjustments/:payment_adjustment_id/items/:payment_adjustment_item_id',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'payment_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'payment_adjustment_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'payment_adjustment_item_id',
                        't': 'int',
                        'r': true
                    }
                ]
            }
        ], PaymentTemplate_f = [
            {
                'n': 'payment_template_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'allow_bt',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'allow_check',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'allow_mo',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'allow_other',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'allow_paypal',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'allow_cc',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'paypal_email',
                't': 'string',
                's': 'listings_r'
            },
            {
                'n': 'name',
                't': 'string',
                's': 'listings_r'
            },
            {
                'n': 'first_line',
                't': 'string',
                's': 'listings_r'
            },
            {
                'n': 'second_line',
                't': 'string',
                's': 'listings_r'
            },
            {
                'n': 'city',
                't': 'string',
                's': 'listings_r'
            },
            {
                'n': 'state',
                't': 'string',
                's': 'listings_r'
            },
            {
                'n': 'zip',
                't': 'string',
                's': 'listings_r'
            },
            {
                'n': 'country_id',
                't': 'int',
                's': 'listings_r'
            },
            {
                'n': 'user_id',
                't': 'int',
                's': 'listings_r'
            },
            {
                'n': 'listing_payment_id',
                't': 'int',
                'v': 'public'
            }
        ], PaymentTemplate_a = [
            {
                'n': 'Country',
                't': 'Country',
                's': 'listings_r'
            },
            {
                'n': 'User',
                't': 'User',
                's': 'listings_r'
            }
        ], PaymentTemplate_m = [
            {
                'n': 'findShopPaymentTemplates',
                'u': '/shops/:shop_id/payment_templates',
                'o': false,
                'p': [{
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    }]
            },
            {
                'n': 'createShopPaymentTemplate',
                'u': '/shops/:shop_id/payment_templates',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'allow_check',
                        't': 'boolean'
                    },
                    {
                        'n': 'allow_mo',
                        't': 'boolean'
                    },
                    {
                        'n': 'allow_other',
                        't': 'boolean'
                    },
                    {
                        'n': 'allow_paypal',
                        't': 'boolean'
                    },
                    {
                        'n': 'allow_cc',
                        't': 'boolean'
                    },
                    {
                        'n': 'paypal_email',
                        't': 'string'
                    },
                    {
                        'n': 'name',
                        't': 'string'
                    },
                    {
                        'n': 'first_line',
                        't': 'string'
                    },
                    {
                        'n': 'second_line',
                        't': 'string'
                    },
                    {
                        'n': 'city',
                        't': 'string'
                    },
                    {
                        'n': 'state',
                        't': 'string'
                    },
                    {
                        'n': 'zip',
                        't': 'string'
                    },
                    {
                        'n': 'country_id',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'updateShopPaymentTemplate',
                'u': '/shops/:shop_id/payment_templates/:payment_template_id',
                'm': 'PUT',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'allow_check',
                        't': 'boolean'
                    },
                    {
                        'n': 'allow_mo',
                        't': 'boolean'
                    },
                    {
                        'n': 'allow_other',
                        't': 'boolean'
                    },
                    {
                        'n': 'allow_paypal',
                        't': 'boolean'
                    },
                    {
                        'n': 'allow_cc',
                        't': 'boolean'
                    },
                    {
                        'n': 'paypal_email',
                        't': 'string'
                    },
                    {
                        'n': 'name',
                        't': 'string'
                    },
                    {
                        'n': 'first_line',
                        't': 'string'
                    },
                    {
                        'n': 'second_line',
                        't': 'string'
                    },
                    {
                        'n': 'city',
                        't': 'string'
                    },
                    {
                        'n': 'state',
                        't': 'string'
                    },
                    {
                        'n': 'zip',
                        't': 'string'
                    },
                    {
                        'n': 'country_id',
                        't': 'int'
                    },
                    {
                        'n': 'payment_template_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'findAllUserPaymentTemplates',
                'u': '/users/:user_id/payments/templates',
                's': 'listings_r',
                'p': [{
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    }]
            }
        ], Receipt_f = [
            {
                'n': 'receipt_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'order_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'seller_user_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'buyer_user_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'last_modified_tsz',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'name',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'first_line',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'second_line',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'city',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'state',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'zip',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'country_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'payment_method',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'payment_email',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'message_from_seller',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'message_from_buyer',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'was_paid',
                't': 'boolean',
                's': 'transactions_r'
            },
            {
                'n': 'total_tax_cost',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'total_price',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'total_shipping_cost',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'currency_code',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'message_from_payment',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'was_shipped',
                't': 'boolean',
                's': 'transactions_r'
            },
            {
                'n': 'buyer_email',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'seller_email',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'discount_amt',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'subtotal',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'grandtotal',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'shipping_tracking_code',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'shipping_tracking_url',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'shipping_carrier',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'shipping_note',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'shipping_notification_date',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'shipments',
                't': 'array(ReceiptShipment)',
                's': 'transactions_r'
            }
        ], Receipt_a = [
            {
                'n': 'Coupon',
                't': 'Coupon',
                's': 'transactions_r'
            },
            {
                'n': 'Country',
                't': 'Country',
                's': 'transactions_r'
            },
            {
                'n': 'Buyer',
                't': 'User',
                's': 'transactions_r'
            },
            {
                'n': 'Seller',
                't': 'User',
                's': 'transactions_r'
            },
            {
                'n': 'Transactions',
                't': 'array(Transaction)',
                's': 'transactions_r'
            },
            {
                'n': 'Listings',
                't': 'array(Listing)',
                's': 'transactions_r'
            }
        ], Receipt_m = [
            {
                'n': 'getReceipt',
                'u': '/receipts/:receipt_id',
                's': 'transactions_r',
                'p': [{
                        'n': 'receipt_id',
                        't': 'array(int)',
                        'r': true
                    }]
            },
            {
                'n': 'updateReceipt',
                'u': '/receipts/:receipt_id',
                'm': 'PUT',
                's': 'transactions_w',
                'p': [
                    {
                        'n': 'receipt_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'was_paid',
                        't': 'boolean'
                    },
                    {
                        'n': 'was_shipped',
                        't': 'boolean'
                    },
                    {
                        'n': 'message_from_seller',
                        't': 'string'
                    },
                    {
                        'n': 'message_from_buyer',
                        't': 'string'
                    }
                ]
            },
            {
                'n': 'findAllShopReceipts',
                'u': '/shops/:shop_id/receipts',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'min_created',
                        't': 'epoch'
                    },
                    {
                        'n': 'max_created',
                        't': 'epoch'
                    },
                    {
                        'n': 'min_last_modified',
                        't': 'int'
                    },
                    {
                        'n': 'max_last_modified',
                        't': 'int'
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'was_paid',
                        't': 'boolean'
                    },
                    {
                        'n': 'was_shipped',
                        't': 'boolean'
                    }
                ]
            },
            {
                'n': 'submitTracking',
                'u': '/shops/:shop_id/receipts/:receipt_id/tracking',
                'm': 'POST',
                's': 'transactions_w',
                'p': [
                    {
                        'n': 'tracking_code',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'carrier_name',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'send_bcc',
                        't': 'boolean'
                    }
                ]
            },
            {
                'n': 'findAllShopReceiptsByStatus',
                'u': '/shops/:shop_id/receipts/:status',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'status',
                        't': 'enum(open, unshipped, unpaid, completed, processing, all)',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'searchAllShopReceipts',
                'u': '/shops/:shop_id/receipts/search',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'search_query',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllUserBuyerReceipts',
                'u': '/users/:user_id/receipts',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            }
        ], ReceiptShipment_f = [
            {
                'n': 'carrier_name',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'receipt_shipping_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'tracking_code',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'tracking_url',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'buyer_note',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'notification_date',
                't': 'int',
                's': 'transactions_r'
            }
        ], Region_f = [
            {
                'n': 'region_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'region_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'is_dead',
                't': 'boolean',
                'v': 'public'
            }
        ], Region_m = [
            {
                'n': 'findAllRegion',
                'u': '/regions',
                'o': false
            },
            {
                'n': 'getRegion',
                'u': '/regions/:region_id',
                'o': false,
                'p': [{
                        'n': 'region_id',
                        't': 'array(int)',
                        'r': true
                    }]
            },
            {
                'n': 'findEligibleRegions',
                'u': '/regions/eligible',
                'o': false
            }
        ], Segment_f = [
            {
                'n': 'name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'path',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'short_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'has_children',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'image_url',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'shop_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'shop_name',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'listing_id',
                't': 'int',
                'v': 'public'
            }
        ], Segment_a = [{
                'n': 'MainImage',
                't': 'ListingImage',
                'v': 'public'
            }], Segment_m = [{
                'n': 'findBrowseSegments',
                'u': '/segments',
                'o': false,
                'p': [
                    {
                        'n': 'region',
                        't': 'string',
                        'd': 'US'
                    },
                    {
                        'n': 'path',
                        't': 'string'
                    }
                ]
            }], SegmentPoster_f = [
            {
                'n': 'name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'path',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'image_url',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'shop_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'shop_name',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'weight',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'listing_id',
                't': 'int',
                'v': 'public'
            }
        ], SegmentPoster_m = [{
                'n': 'findBrowseSegmentPosters',
                'u': '/segments/posters',
                'o': false,
                'p': [{
                        'n': 'path',
                        't': 'string'
                    }]
            }], ShippingInfo_f = [
            {
                'n': 'shipping_info_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'origin_country_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'destination_country_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'currency_code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'primary_cost',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'secondary_cost',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'listing_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'region_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'origin_country_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'destination_country_name',
                't': 'string',
                'v': 'public'
            }
        ], ShippingInfo_a = [
            {
                'n': 'DestinationCountry',
                't': 'Country',
                'v': 'public'
            },
            {
                'n': 'OriginCountry',
                't': 'Country',
                'v': 'public'
            },
            {
                'n': 'Region',
                't': 'Region',
                'v': 'public'
            }
        ], ShippingInfo_m = [
            {
                'n': 'findAllListingShippingProfileEntries',
                'u': '/listings/:listing_id/shipping/info',
                'o': false
            },
            {
                'n': 'createShippingInfo',
                'u': '/listings/:listing_id/shipping/info',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'destination_country_id',
                        't': 'int'
                    },
                    {
                        'n': 'primary_cost',
                        't': 'float',
                        'r': true
                    },
                    {
                        'n': 'secondary_cost',
                        't': 'float',
                        'r': true
                    },
                    {
                        'n': 'region_id',
                        't': 'int'
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'getShippingInfo',
                'u': '/shipping/info/:shipping_info_id',
                's': 'listings_w',
                'p': [{
                        'n': 'shipping_info_id',
                        't': 'array(int)',
                        'r': true
                    }]
            },
            {
                'n': 'updateShippingInfo',
                'u': '/shipping/info/:shipping_info_id',
                'm': 'PUT',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'shipping_info_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'destination_country_id',
                        't': 'int'
                    },
                    {
                        'n': 'primary_cost',
                        't': 'float'
                    },
                    {
                        'n': 'secondary_cost',
                        't': 'float'
                    },
                    {
                        'n': 'region_id',
                        't': 'int'
                    },
                    {
                        'n': 'listing_id',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'deleteShippingInfo',
                'u': '/shipping/info/:shipping_info_id',
                'm': 'DELETE',
                's': 'listings_w',
                'p': [{
                        'n': 'shipping_info_id',
                        't': 'int',
                        'r': true
                    }]
            }
        ], ShippingOption_f = [
            {
                'n': 'shipping_option_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'value',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'price',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'currency_code',
                't': 'string',
                'v': 'public'
            }
        ], ShippingTemplate_f = [
            {
                'n': 'shipping_template_id',
                't': 'int',
                's': 'listings_r'
            },
            {
                'n': 'title',
                't': 'string',
                's': 'listings_r'
            },
            {
                'n': 'user_id',
                't': 'int',
                's': 'listings_r'
            },
            {
                'n': 'min_processing_days',
                't': 'int',
                's': 'listings_r'
            },
            {
                'n': 'max_processing_days',
                't': 'int',
                's': 'listings_r'
            },
            {
                'n': 'processing_days_display_label',
                't': 'string',
                's': 'listings_r'
            },
            {
                'n': 'origin_country_id',
                't': 'int',
                's': 'listings_r'
            }
        ], ShippingTemplate_a = [
            {
                'n': 'Entries',
                't': 'array(ShippingTemplateEntry)',
                's': 'listings_r'
            },
            {
                'n': 'Upgrades',
                't': 'array(ShippingUpgrade)',
                's': 'listings_r'
            }
        ], ShippingTemplate_m = [
            {
                'n': 'createShippingTemplate',
                'u': '/shipping/templates',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'title',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'origin_country_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'destination_country_id',
                        't': 'int'
                    },
                    {
                        'n': 'primary_cost',
                        't': 'float',
                        'r': true
                    },
                    {
                        'n': 'secondary_cost',
                        't': 'float',
                        'r': true
                    },
                    {
                        'n': 'destination_region_id',
                        't': 'int'
                    },
                    {
                        'n': 'min_processing_days',
                        't': 'int'
                    },
                    {
                        'n': 'max_processing_days',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'getShippingTemplate',
                'u': '/shipping/templates/:shipping_template_id',
                's': 'listings_r',
                'p': [{
                        'n': 'shipping_template_id',
                        't': 'array(int)',
                        'r': true
                    }]
            },
            {
                'n': 'updateShippingTemplate',
                'u': '/shipping/templates/:shipping_template_id',
                'm': 'PUT',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'shipping_template_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'title',
                        't': 'string'
                    },
                    {
                        'n': 'origin_country_id',
                        't': 'int'
                    },
                    {
                        'n': 'min_processing_days',
                        't': 'int'
                    },
                    {
                        'n': 'max_processing_days',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'deleteShippingTemplate',
                'u': '/shipping/templates/:shipping_template_id',
                'm': 'DELETE',
                's': 'listings_w',
                'p': [{
                        'n': 'shipping_template_id',
                        't': 'int',
                        'r': true
                    }]
            },
            {
                'n': 'findAllShippingTemplateEntries',
                'u': '/shipping/templates/:shipping_template_id/entries',
                's': 'listings_r',
                'p': [
                    {
                        'n': 'shipping_template_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllUserShippingProfiles',
                'u': '/users/:user_id/shipping/templates',
                'p': [{
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    }]
            }
        ], ShippingTemplateEntry_f = [
            {
                'n': 'shipping_template_entry_id',
                't': 'int',
                's': 'listings_r'
            },
            {
                'n': 'shipping_template_id',
                't': 'int',
                's': 'listings_r'
            },
            {
                'n': 'currency_code',
                't': 'string',
                's': 'listings_r'
            },
            {
                'n': 'origin_country_id',
                't': 'int',
                's': 'listings_r'
            },
            {
                'n': 'destination_country_id',
                't': 'int',
                's': 'listings_r'
            },
            {
                'n': 'destination_region_id',
                't': 'int',
                's': 'listings_r'
            },
            {
                'n': 'primary_cost',
                't': 'float',
                's': 'listings_r'
            },
            {
                'n': 'secondary_cost',
                't': 'float',
                's': 'listings_r'
            }
        ], ShippingTemplateEntry_a = [
            {
                'n': 'OriginCountry',
                't': 'Country',
                's': 'listings_r'
            },
            {
                'n': 'DestinationCountry',
                't': 'Country',
                's': 'listings_r'
            },
            {
                'n': 'DestinationRegion',
                't': 'Region',
                's': 'listings_r'
            },
            {
                'n': 'Template',
                't': 'ShippingTemplate',
                's': 'listings_r'
            }
        ], ShippingTemplateEntry_m = [
            {
                'n': 'createShippingTemplateEntry',
                'u': '/shipping/templates/entries',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'shipping_template_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'destination_country_id',
                        't': 'int'
                    },
                    {
                        'n': 'primary_cost',
                        't': 'float',
                        'r': true
                    },
                    {
                        'n': 'secondary_cost',
                        't': 'float',
                        'r': true
                    },
                    {
                        'n': 'destination_region_id',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'getShippingTemplateEntry',
                'u': '/shipping/templates/entries/:shipping_template_entry_id',
                's': 'listings_w',
                'p': [{
                        'n': 'shipping_template_entry_id',
                        't': 'array(int)',
                        'r': true
                    }]
            },
            {
                'n': 'updateShippingTemplateEntry',
                'u': '/shipping/templates/entries/:shipping_template_entry_id',
                'm': 'PUT',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'shipping_template_entry_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'destination_country_id',
                        't': 'int'
                    },
                    {
                        'n': 'primary_cost',
                        't': 'float'
                    },
                    {
                        'n': 'secondary_cost',
                        't': 'float'
                    }
                ]
            },
            {
                'n': 'deleteShippingTemplateEntry',
                'u': '/shipping/templates/entries/:shipping_template_entry_id',
                'm': 'DELETE',
                's': 'listings_w',
                'p': [{
                        'n': 'shipping_template_entry_id',
                        't': 'int',
                        'r': true
                    }]
            }
        ], ShippingUpgrade_f = [
            {
                'n': 'shipping_profile_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'value_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'value',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'price',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'secondary_price',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'currency_code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'type',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'order',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'language',
                't': 'int',
                'v': 'public'
            }
        ], ShippingUpgrade_m = [
            {
                'n': 'getListingShippingUpgrades',
                'u': '/listings/:listing_id/shipping/upgrades',
                's': 'listings_r',
                'p': [{
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }]
            },
            {
                'n': 'createListingShippingUpgrade',
                'u': '/listings/:listing_id/shipping/upgrades',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'type',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'value',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'price',
                        't': 'float',
                        'r': true
                    },
                    {
                        'n': 'secondary_price',
                        't': 'float',
                        'r': true
                    }
                ]
            },
            {
                'n': 'updateListingShippingUpgrade',
                'u': '/listings/:listing_id/shipping/upgrades',
                'm': 'PUT',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'value_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'type',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'price',
                        't': 'float',
                        'r': true
                    },
                    {
                        'n': 'secondary_price',
                        't': 'float',
                        'r': true
                    }
                ]
            },
            {
                'n': 'deleteListingShippingUpgrade',
                'u': '/listings/:listing_id/shipping/upgrades',
                'm': 'DELETE',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'value_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'type',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'findAllShippingTemplateUpgrades',
                'u': '/shipping/templates/:shipping_template_id/upgrades',
                's': 'listings_r',
                'p': [{
                        'n': 'shipping_template_id',
                        't': 'int',
                        'r': true
                    }]
            },
            {
                'n': 'createShippingTemplateUpgrade',
                'u': '/shipping/templates/:shipping_template_id/upgrades',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'shipping_template_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'type',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'value',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'price',
                        't': 'float',
                        'r': true
                    },
                    {
                        'n': 'secondary_price',
                        't': 'float',
                        'r': true
                    }
                ]
            },
            {
                'n': 'updateShippingTemplateUpgrade',
                'u': '/shipping/templates/:shipping_template_id/upgrades',
                'm': 'PUT',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'shipping_template_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'value_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'type',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'price',
                        't': 'float',
                        'r': true
                    },
                    {
                        'n': 'secondary_price',
                        't': 'float',
                        'r': true
                    }
                ]
            },
            {
                'n': 'deleteShippingTemplateUpgrade',
                'u': '/shipping/templates/:shipping_template_id/upgrades',
                'm': 'DELETE',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'shipping_template_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'value_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'type',
                        't': 'int',
                        'r': true
                    }
                ]
            }
        ], Shop_f = [
            {
                'n': 'shop_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'shop_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'first_line',
                't': 'string',
                's': 'shops_rw'
            },
            {
                'n': 'second_line',
                't': 'string',
                's': 'shops_rw'
            },
            {
                'n': 'city',
                't': 'string',
                's': 'shops_rw'
            },
            {
                'n': 'state',
                't': 'string',
                's': 'shops_rw'
            },
            {
                'n': 'zip',
                't': 'string',
                's': 'shops_rw'
            },
            {
                'n': 'country_id',
                't': 'int',
                's': 'shops_rw'
            },
            {
                'n': 'user_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'title',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'announcement',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'currency_code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'is_vacation',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'vacation_message',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'sale_message',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'digital_sale_message',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'last_updated_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'listing_active_count',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'login_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'lat',
                't': 'float',
                's': 'shops_rw'
            },
            {
                'n': 'lon',
                't': 'float',
                's': 'shops_rw'
            },
            {
                'n': 'accepts_custom_requests',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'policy_welcome',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_payment',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_shipping',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_refunds',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_additional',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_seller_info',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_updated_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'vacation_autoreply',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'ga_code',
                't': 'string',
                's': 'shops_rw'
            },
            {
                'n': 'name',
                't': 'string',
                's': 'shops_rw'
            },
            {
                'n': 'url',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'image_url_760x100',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'num_favorers',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'languages',
                't': 'string',
                'v': 'public'
            }
        ], Shop_a = [
            {
                'n': 'User',
                't': 'User',
                'v': 'public'
            },
            {
                'n': 'About',
                't': 'ShopAbout',
                'v': 'public'
            },
            {
                'n': 'Sections',
                't': 'array(ShopSection)',
                'v': 'public'
            },
            {
                'n': 'Listings',
                't': 'array(Listing)',
                'v': 'public'
            },
            {
                'n': 'Receipts',
                't': 'array(Receipt)',
                's': 'shops_rw'
            },
            {
                'n': 'Transactions',
                't': 'array(Transaction)',
                's': 'shops_rw'
            },
            {
                'n': 'Translations',
                't': 'array(ShopTranslation)',
                'v': 'public'
            }
        ], Shop_m = [
            {
                'n': 'findAllShops',
                'u': '/shops',
                'o': false,
                'p': [
                    {
                        'n': 'shop_name',
                        't': 'string'
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    },
                    {
                        'n': 'lat',
                        't': 'latitude'
                    },
                    {
                        'n': 'lon',
                        't': 'longitude'
                    },
                    {
                        'n': 'distance_max',
                        't': 'float',
                        'd': '35'
                    }
                ]
            },
            {
                'n': 'getShop',
                'u': '/shops/:shop_id',
                'o': false,
                'p': [{
                        'n': 'shop_id',
                        't': 'array(shop_id_or_name)',
                        'r': true
                    }]
            },
            {
                'n': 'updateShop',
                'u': '/shops/:shop_id',
                'm': 'PUT',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'title',
                        't': 'string'
                    },
                    {
                        'n': 'announcement',
                        't': 'text'
                    },
                    {
                        'n': 'sale_message',
                        't': 'text'
                    },
                    {
                        'n': 'policy_welcome',
                        't': 'text'
                    },
                    {
                        'n': 'policy_payment',
                        't': 'text'
                    },
                    {
                        'n': 'policy_shipping',
                        't': 'text'
                    },
                    {
                        'n': 'policy_refunds',
                        't': 'text'
                    },
                    {
                        'n': 'policy_additional',
                        't': 'text'
                    },
                    {
                        'n': 'policy_seller_info',
                        't': 'text'
                    },
                    {
                        'n': 'digital_sale_message',
                        't': 'text'
                    }
                ]
            },
            {
                'n': 'uploadShopBanner',
                'u': '/shops/:shop_id/appearance/banner',
                'm': 'POST',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'image',
                        't': 'imagefile',
                        'r': true
                    }
                ]
            },
            {
                'n': 'deleteShopBanner',
                'u': '/shops/:shop_id/appearance/banner',
                'm': 'DELETE',
                's': 'shops_rw',
                'p': [{
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    }]
            },
            {
                'n': 'getListingShop',
                'u': '/shops/listing/:listing_id',
                'o': false,
                'p': [{
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }]
            },
            {
                'n': 'findAllUserShops',
                'u': '/users/:user_id/shops',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            }
        ], ShopAbout_f = [
            {
                'n': 'shop_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'status',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'story_headline',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'story_leading_paragraph',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'story',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'related_links',
                't': 'string',
                'v': 'public'
            }
        ], ShopAbout_a = [
            {
                'n': 'Shop',
                't': 'Shop',
                'v': 'public'
            },
            {
                'n': 'Members',
                't': 'array(ShopAboutMember)',
                'v': 'public'
            },
            {
                'n': 'Images',
                't': 'array(ShopAboutImages)',
                'v': 'public'
            }
        ], ShopAbout_m = [{
                'n': 'getShopAbout',
                'u': '/shops/:shop_id/about',
                'o': false,
                'p': [{
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    }]
            }], ShopAboutImage_f = [
            {
                'n': 'shop_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'image_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'caption',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'rank',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'url_178x178',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'url_545xN',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'url_760xN',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'url_fullxfull',
                't': 'string',
                'v': 'public'
            }
        ], ShopAboutMember_f = [
            {
                'n': 'shop_about_member_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'shop_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'role',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'bio',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'rank',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'is_owner',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'url_90x90',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'url_190x190',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'has_stale_translations',
                't': 'boolean',
                'v': 'public'
            }
        ], ShopSection_f = [
            {
                'n': 'shop_section_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'title',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'rank',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'user_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'active_listing_count',
                't': 'int',
                'v': 'public'
            }
        ], ShopSection_a = [
            {
                'n': 'Shop',
                't': 'Shop',
                'v': 'public'
            },
            {
                'n': 'Listings',
                't': 'array(Listing)',
                'v': 'public'
            },
            {
                'n': 'Translations',
                't': 'array(ShopSectionTranslation)',
                'v': 'public'
            }
        ], ShopSection_m = [
            {
                'n': 'findAllShopSections',
                'u': '/shops/:shop_id/sections',
                'o': false,
                'p': [{
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    }]
            },
            {
                'n': 'createShopSection',
                'u': '/shops/:shop_id/sections',
                'm': 'POST',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'title',
                        't': 'text'
                    },
                    {
                        'n': 'user_id',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'getShopSection',
                'u': '/shops/:shop_id/sections/:shop_section_id',
                'o': false,
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'shop_section_id',
                        't': 'array(int)',
                        'r': true
                    }
                ]
            },
            {
                'n': 'updateShopSection',
                'u': '/shops/:shop_id/sections/:shop_section_id',
                'm': 'PUT',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'shop_section_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'title',
                        't': 'text'
                    },
                    {
                        'n': 'user_id',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'deleteShopSection',
                'u': '/shops/:shop_id/sections/:shop_section_id',
                'm': 'DELETE',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'shop_section_id',
                        't': 'int',
                        'r': true
                    }
                ]
            }
        ], ShopSectionTranslation_f = [
            {
                'n': 'shop_section_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'language',
                't': 'language',
                'v': 'public'
            },
            {
                'n': 'title',
                't': 'string',
                'v': 'public'
            }
        ], ShopSectionTranslation_a = [{
                'n': 'ShopSection',
                't': 'ShopSection',
                'v': 'public'
            }], ShopSectionTranslation_m = [
            {
                'n': 'getShopSectionTranslation',
                'u': '/shops/:shop_id/sections/:shop_section_id/translations/:language',
                'o': false,
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'shop_section_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    }
                ]
            },
            {
                'n': 'createShopSectionTranslation',
                'u': '/shops/:shop_id/sections/:shop_section_id/translations/:language',
                'm': 'POST',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'shop_section_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    },
                    {
                        'n': 'title',
                        't': 'string'
                    }
                ]
            },
            {
                'n': 'updateShopSectionTranslation',
                'u': '/shops/:shop_id/sections/:shop_section_id/translations/:language',
                'm': 'PUT',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'shop_section_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    },
                    {
                        'n': 'title',
                        't': 'string'
                    }
                ]
            },
            {
                'n': 'deleteShopSectionTranslation',
                'u': '/shops/:shop_id/sections/:shop_section_id/translations/:language',
                'm': 'DELETE',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'shop_section_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    }
                ]
            }
        ], ShopTranslation_f = [
            {
                'n': 'shop_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'language',
                't': 'language',
                'v': 'public'
            },
            {
                'n': 'announcement',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_welcome',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_payment',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_shipping',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_refunds',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_additional',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'policy_seller_info',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'sale_message',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'digital_sale_message',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'title',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'vacation_autoreply',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'vacation_message',
                't': 'string',
                'v': 'public'
            }
        ], ShopTranslation_m = [
            {
                'n': 'getShopTranslation',
                'u': '/shops/:shop_id/translations/:language',
                'o': false,
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    }
                ]
            },
            {
                'n': 'createShopTranslation',
                'u': '/shops/:shop_id/translations/:language',
                'm': 'POST',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    },
                    {
                        'n': 'title',
                        't': 'string'
                    },
                    {
                        'n': 'sale_message',
                        't': 'string'
                    },
                    {
                        'n': 'announcement',
                        't': 'string'
                    },
                    {
                        'n': 'policy_welcome',
                        't': 'string'
                    },
                    {
                        'n': 'policy_payment',
                        't': 'string'
                    },
                    {
                        'n': 'policy_shipping',
                        't': 'string'
                    },
                    {
                        'n': 'policy_refunds',
                        't': 'string'
                    },
                    {
                        'n': 'policy_additional',
                        't': 'string'
                    },
                    {
                        'n': 'policy_seller_info',
                        't': 'string'
                    },
                    {
                        'n': 'vacation_autoreply',
                        't': 'string'
                    },
                    {
                        'n': 'vacation_message',
                        't': 'string'
                    }
                ]
            },
            {
                'n': 'updateShopTranslation',
                'u': '/shops/:shop_id/translations/:language',
                'm': 'PUT',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    },
                    {
                        'n': 'title',
                        't': 'string'
                    },
                    {
                        'n': 'sale_message',
                        't': 'string'
                    },
                    {
                        'n': 'announcement',
                        't': 'string'
                    },
                    {
                        'n': 'policy_welcome',
                        't': 'string'
                    },
                    {
                        'n': 'policy_payment',
                        't': 'string'
                    },
                    {
                        'n': 'policy_shipping',
                        't': 'string'
                    },
                    {
                        'n': 'policy_refunds',
                        't': 'string'
                    },
                    {
                        'n': 'policy_additional',
                        't': 'string'
                    },
                    {
                        'n': 'policy_seller_info',
                        't': 'string'
                    },
                    {
                        'n': 'vacation_autoreply',
                        't': 'string'
                    },
                    {
                        'n': 'vacation_message',
                        't': 'string'
                    }
                ]
            },
            {
                'n': 'deleteShopTranslation',
                'u': '/shops/:shop_id/translations/:language',
                'm': 'DELETE',
                's': 'shops_rw',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'language',
                        't': 'language',
                        'r': true
                    }
                ]
            }
        ], Style_f = [
            {
                'n': 'style_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'style',
                't': 'string',
                'v': 'public'
            }
        ], Style_m = [{
                'n': 'findSuggestedStyles',
                'u': '/taxonomy/styles',
                'o': false
            }], Team_f = [
            {
                'n': 'group_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'create_date',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'update_date',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'tags',
                't': 'string',
                'v': 'public'
            }
        ], Team_m = [
            {
                'n': 'findAllTeams',
                'u': '/teams',
                'o': false,
                'p': [
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findTeams',
                'u': '/teams/:team_ids/',
                'o': false,
                'p': [{
                        'n': 'team_ids',
                        't': 'array(team_id_or_name)',
                        'r': true
                    }]
            },
            {
                'n': 'findAllTeamsForUser',
                'u': '/users/:user_id/teams',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            }
        ], Transaction_f = [
            {
                'n': 'transaction_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'title',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'description',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'seller_user_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'buyer_user_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'paid_tsz',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'shipped_tsz',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'price',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'currency_code',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'quantity',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'tags',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'materials',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'image_listing_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'receipt_id',
                't': 'int',
                's': 'transactions_r'
            },
            {
                'n': 'shipping_cost',
                't': 'float',
                's': 'transactions_r'
            },
            {
                'n': 'is_digital',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'file_data',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'listing_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'seller_feedback_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'buyer_feedback_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'transaction_type',
                't': 'string',
                's': 'transactions_r'
            },
            {
                'n': 'url',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'variations',
                't': 'array(Variations_SelectedProperty)',
                'v': 'public'
            }
        ], Transaction_a = [
            {
                'n': 'Buyer',
                't': 'User',
                's': 'transactions_r'
            },
            {
                'n': 'MainImage',
                't': 'ListingImage',
                'v': 'public'
            },
            {
                'n': 'Listing',
                't': 'Listing',
                'v': 'public'
            },
            {
                'n': 'Seller',
                't': 'User',
                'v': 'public'
            },
            {
                'n': 'Receipt',
                't': 'Receipt',
                's': 'transactions_r'
            }
        ], Transaction_m = [
            {
                'n': 'getTransaction',
                'u': '/transactions/:transaction_id',
                's': 'transactions_r',
                'p': [{
                        'n': 'transaction_id',
                        't': 'array(int)',
                        'r': true
                    }]
            },
            {
                'n': 'findAllListingTransactions',
                'u': '/listings/:listing_id/transactions',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllReceiptTransactions',
                'u': '/receipts/:receipt_id/transactions',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'receipt_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllShopTransactions',
                'u': '/shops/:shop_id/transactions',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'shop_id',
                        't': 'shop_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'findAllUserBuyerTransactions',
                'u': '/users/:user_id/transactions',
                's': 'transactions_r',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            }
        ], Treasury_f = [
            {
                'n': 'id',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'title',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'description',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'homepage',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'mature',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'private',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'locale',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'comment_count',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'tags',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'counts',
                't': 'TreasuryCounts',
                'v': 'public'
            },
            {
                'n': 'hotness',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'hotness_color',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'user_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'user_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'user_avatar_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'listings',
                't': 'array(TreasuryListing)',
                'v': 'public'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'became_public_date',
                't': 'int',
                'v': 'public'
            }
        ], Treasury_m = [
            {
                'n': 'findAllTreasuries',
                'u': '/treasuries',
                'o': false,
                'p': [
                    {
                        'n': 'keywords',
                        't': 'treasury_search_string'
                    },
                    {
                        'n': 'sort_on',
                        't': 'enum(hotness, created)',
                        'd': 'hotness'
                    },
                    {
                        'n': 'sort_order',
                        't': 'enum(up, down)',
                        'd': 'down'
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'createTreasury',
                'u': '/treasuries',
                'm': 'POST',
                's': 'treasury_w',
                'p': [
                    {
                        'n': 'title',
                        't': 'treasury_title',
                        'r': true
                    },
                    {
                        'n': 'description',
                        't': 'treasury_description'
                    },
                    {
                        'n': 'listing_ids',
                        't': 'array(int)',
                        'r': true
                    },
                    {
                        'n': 'tags',
                        't': 'array(string)'
                    },
                    {
                        'n': 'private',
                        't': 'boolean',
                        'd': '0'
                    }
                ]
            },
            {
                'n': 'getTreasury',
                'u': '/treasuries/:treasury_key',
                'o': false,
                'p': [{
                        'n': 'treasury_key',
                        't': 'treasury_id',
                        'r': true
                    }]
            },
            {
                'n': 'deleteTreasury',
                'u': '/treasuries/:treasury_key',
                'm': 'DELETE',
                's': 'treasury_w'
            },
            {
                'n': 'findAllUserTreasuries',
                'u': '/users/:user_id/treasuries',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'sort_on',
                        't': 'enum(hotness, created)',
                        'd': 'hotness'
                    },
                    {
                        'n': 'sort_order',
                        't': 'enum(up, down)',
                        'd': 'down'
                    },
                    {
                        'n': 'include_private',
                        't': 'boolean',
                        'd': '0'
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            }
        ], TreasuryCounts_f = [
            {
                'n': 'clicks',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'views',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'shares',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'reports',
                't': 'int',
                'v': 'public'
            }
        ], TreasuryListing_f = [
            {
                'n': 'data',
                't': 'TreasuryListingData',
                'v': 'public'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                'v': 'public'
            }
        ], TreasuryListing_m = [
            {
                'n': 'addTreasuryListing',
                'u': '/treasuries/:treasury_key/listings',
                'm': 'POST',
                's': 'treasury_w',
                'p': [
                    {
                        'n': 'treasury_key',
                        't': 'treasury_id',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'removeTreasuryListing',
                'u': '/treasuries/:treasury_key/listings/:listing_id',
                'm': 'DELETE',
                's': 'treasury_w',
                'p': [
                    {
                        'n': 'treasury_key',
                        't': 'treasury_id',
                        'r': true
                    },
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }
                ]
            }
        ], TreasuryListingData_f = [
            {
                'n': 'user_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'title',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'price',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'currency_code',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'listing_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'state',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'shop_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'image_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'image_url_75x75',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'image_url_170x135',
                't': 'string',
                'v': 'public'
            }
        ], User_f = [
            {
                'n': 'user_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'login_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'primary_email',
                't': 'string',
                's': 'email_r'
            },
            {
                'n': 'creation_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'referred_by_user_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'feedback_info',
                't': 'FeedbackInfo',
                'v': 'public'
            },
            {
                'n': 'awaiting_feedback_count',
                't': 'int'
            }
        ], User_a = [
            {
                'n': 'Shops',
                't': 'array(Shop)',
                'v': 'public'
            },
            {
                'n': 'Profile',
                't': 'UserProfile',
                'v': 'public'
            },
            {
                'n': 'BuyerReceipts',
                't': 'array(Receipt)',
                's': 'transactions_r'
            },
            {
                'n': 'BuyerTransactions',
                't': 'array(Transaction)',
                's': 'transactions_r'
            },
            {
                'n': 'Addresses',
                't': 'array(UserAddress)',
                's': 'profile_r'
            },
            {
                'n': 'Charges',
                't': 'array(BillCharge)',
                's': 'billing_r'
            },
            {
                'n': 'Payments',
                't': 'array(BillPayment)',
                's': 'billing_r'
            }
        ], User_m = [
            {
                'n': 'findAllUsers',
                'u': '/users',
                'o': false,
                'p': [
                    {
                        'n': 'keywords',
                        't': 'string'
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'getUser',
                'u': '/users/:user_id',
                'o': false,
                'p': [{
                        'n': 'user_id',
                        't': 'array(user_id_or_name)',
                        'r': true
                    }]
            },
            {
                'n': 'findAllUsersForTeam',
                'u': '/teams/:team_id/users/',
                'o': false,
                'p': [
                    {
                        'n': 'team_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'status',
                        't': 'enum(active, invited, pending)',
                        'd': 'active'
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'getCirclesContainingUser',
                'u': '/users/:user_id/circles',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'getConnectedUser',
                'u': '/users/:user_id/circles/:to_user_id',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'to_user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'unconnectUsers',
                'u': '/users/:user_id/circles/:to_user_id',
                'm': 'DELETE',
                's': 'profile_w',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'to_user_id',
                        't': 'user_id_or_name',
                        'r': true
                    }
                ]
            },
            {
                'n': 'getConnectedUsers',
                'u': '/users/:user_id/connected_users',
                'o': false,
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'connectUsers',
                'u': '/users/:user_id/connected_users',
                'm': 'POST',
                's': 'profile_w',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'to_user_id',
                        't': 'user_id_or_name',
                        'r': true
                    }
                ]
            }
        ], UserAddress_f = [
            {
                'n': 'user_address_id',
                't': 'int',
                's': 'address_r'
            },
            {
                'n': 'user_id',
                't': 'int',
                's': 'address_r'
            },
            {
                'n': 'name',
                't': 'text',
                's': 'address_r'
            },
            {
                'n': 'first_line',
                't': 'text',
                's': 'address_r'
            },
            {
                'n': 'second_line',
                't': 'text',
                's': 'address_r'
            },
            {
                'n': 'city',
                't': 'text',
                's': 'address_r'
            },
            {
                'n': 'state',
                't': 'text',
                's': 'address_r'
            },
            {
                'n': 'zip',
                't': 'text',
                's': 'address_r'
            },
            {
                'n': 'country_id',
                't': 'int',
                's': 'address_r'
            },
            {
                'n': 'country_name',
                't': 'string',
                's': 'address_r'
            }
        ], UserAddress_a = [
            {
                'n': 'Country',
                't': 'Country',
                's': 'address_r'
            },
            {
                'n': 'User',
                't': 'User',
                's': 'address_r'
            }
        ], UserAddress_m = [
            {
                'n': 'findAllUserAddresses',
                'u': '/users/:user_id/addresses',
                's': 'address_r',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'limit',
                        't': 'int',
                        'd': '25'
                    },
                    {
                        'n': 'offset',
                        't': 'int',
                        'd': '0'
                    },
                    {
                        'n': 'page',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'createUserAddress',
                'u': '/users/:user_id/addresses/',
                'm': 'POST',
                's': 'address_w',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'name',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'first_line',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'second_line',
                        't': 'string'
                    },
                    {
                        'n': 'city',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'state',
                        't': 'string'
                    },
                    {
                        'n': 'zip',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'country_id',
                        't': 'int',
                        'r': true
                    }
                ]
            },
            {
                'n': 'getUserAddress',
                'u': '/users/:user_id/addresses/:user_address_id',
                's': 'address_r',
                'p': [{
                        'n': 'user_address_id',
                        't': 'array(int)',
                        'r': true
                    }]
            },
            {
                'n': 'deleteUserAddress',
                'u': '/users/:user_id/addresses/:user_address_id',
                'm': 'DELETE',
                's': 'address_w',
                'p': [{
                        'n': 'user_address_id',
                        't': 'int',
                        'r': true
                    }]
            }
        ], UserProfile_f = [
            {
                'n': 'user_profile_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'user_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'login_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'bio',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'gender',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'birth_month',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'birth_day',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'birth_year',
                't': 'string',
                's': 'profile_r'
            },
            {
                'n': 'join_tsz',
                't': 'float',
                'v': 'public'
            },
            {
                'n': 'materials',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'country_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'region',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'city',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'location',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'avatar_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'lat',
                't': 'float',
                's': 'profile_r'
            },
            {
                'n': 'lon',
                't': 'float',
                's': 'profile_r'
            },
            {
                'n': 'transaction_buy_count',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'transaction_sold_count',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'is_seller',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'image_url_75x75',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'first_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'last_name',
                't': 'string',
                'v': 'public'
            }
        ], UserProfile_a = [{
                'n': 'Country',
                't': 'Country',
                'v': 'public'
            }], UserProfile_m = [
            {
                'n': 'findUserProfile',
                'u': '/users/:user_id/profile',
                'o': false,
                'p': [{
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    }]
            },
            {
                'n': 'updateUserProfile',
                'u': '/users/:user_id/profile',
                'm': 'PUT',
                's': 'profile_w',
                'p': [
                    {
                        'n': 'user_id',
                        't': 'user_id_or_name',
                        'r': true
                    },
                    {
                        'n': 'bio',
                        't': 'text'
                    },
                    {
                        'n': 'gender',
                        't': 'string'
                    },
                    {
                        'n': 'birth_month',
                        't': 'int'
                    },
                    {
                        'n': 'birth_day',
                        't': 'int'
                    },
                    {
                        'n': 'birth_year',
                        't': 'int'
                    },
                    {
                        'n': 'materials',
                        't': 'string'
                    },
                    {
                        'n': 'country_id',
                        't': 'string'
                    },
                    {
                        'n': 'region',
                        't': 'string'
                    },
                    {
                        'n': 'city',
                        't': 'string'
                    }
                ]
            }
        ], Variations_Option_f = [
            {
                'n': 'value_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'value',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'formatted_value',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'is_available',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'price_diff',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'price',
                't': 'int',
                'v': 'public'
            }
        ], Variations_Property_f = [
            {
                'n': 'property_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'formatted_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'options',
                't': 'array(Variations_Option)',
                'v': 'public'
            }
        ], Variations_Property_m = [
            {
                'n': 'getListingVariations',
                'u': '/listings/:listing_id/variations',
                's': 'listings_r',
                'p': [{
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    }]
            },
            {
                'n': 'createListingVariations',
                'u': '/listings/:listing_id/variations',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'variations',
                        't': 'array(listing_variation)',
                        'r': true
                    },
                    {
                        'n': 'custom_property_names',
                        't': 'map(int, string)'
                    },
                    {
                        'n': 'recipient_id',
                        't': 'int'
                    },
                    {
                        'n': 'sizing_scale',
                        't': 'int'
                    },
                    {
                        'n': 'weight_scale',
                        't': 'int'
                    },
                    {
                        'n': 'height_scale',
                        't': 'int'
                    },
                    {
                        'n': 'length_scale',
                        't': 'int'
                    },
                    {
                        'n': 'width_scale',
                        't': 'int'
                    },
                    {
                        'n': 'diameter_scale',
                        't': 'int'
                    },
                    {
                        'n': 'dimensions_scale',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'updateListingVariations',
                'u': '/listings/:listing_id/variations',
                'm': 'PUT',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'variations',
                        't': 'array(listing_variation)',
                        'r': true
                    },
                    {
                        'n': 'custom_property_names',
                        't': 'map(int, string)'
                    },
                    {
                        'n': 'recipient_id',
                        't': 'int'
                    },
                    {
                        'n': 'sizing_scale',
                        't': 'int'
                    },
                    {
                        'n': 'weight_scale',
                        't': 'int'
                    },
                    {
                        'n': 'height_scale',
                        't': 'int'
                    },
                    {
                        'n': 'length_scale',
                        't': 'int'
                    },
                    {
                        'n': 'width_scale',
                        't': 'int'
                    },
                    {
                        'n': 'diameter_scale',
                        't': 'int'
                    },
                    {
                        'n': 'dimensions_scale',
                        't': 'int'
                    }
                ]
            },
            {
                'n': 'createListingVariation',
                'u': '/listings/:listing_id/variations/:property_id',
                'm': 'POST',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'property_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'value',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'is_available',
                        't': 'boolean',
                        'd': '1'
                    },
                    {
                        'n': 'price',
                        't': 'float'
                    }
                ]
            },
            {
                'n': 'updateListingVariation',
                'u': '/listings/:listing_id/variations/:property_id',
                'm': 'PUT',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'property_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'value',
                        't': 'string',
                        'r': true
                    },
                    {
                        'n': 'is_available',
                        't': 'boolean',
                        'r': true
                    },
                    {
                        'n': 'price',
                        't': 'float'
                    }
                ]
            },
            {
                'n': 'deleteListingVariation',
                'u': '/listings/:listing_id/variations/:property_id',
                'm': 'DELETE',
                's': 'listings_w',
                'p': [
                    {
                        'n': 'listing_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'property_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'value',
                        't': 'string',
                        'r': true
                    }
                ]
            }
        ], Variations_PropertyQualifier_f = [
            {
                'n': 'property_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'options',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'results',
                't': 'map(string, Variations_PropertyQualifier)',
                'v': 'public'
            },
            {
                'n': 'aliases',
                't': 'string',
                'v': 'public'
            }
        ], Variations_PropertySet_f = [
            {
                'n': 'property_set_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'properties',
                't': 'map(int, Variations_PropertySetProperty)',
                'v': 'public'
            },
            {
                'n': 'qualifying_properties',
                't': 'map(int, Variations_PropertySetProperty)',
                'v': 'public'
            },
            {
                'n': 'options',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'qualifiers',
                't': 'map(int, array(Variations_PropertyQualifier))',
                'v': 'public'
            }
        ], Variations_PropertySet_m = [{
                'n': 'findPropertySet',
                'u': '/property_sets',
                'o': false,
                'p': [{
                        'n': 'category_id',
                        't': 'int'
                    }]
            }], Variations_PropertySetOption_f = [
            {
                'n': 'property_option_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'formatted_name',
                't': 'string',
                'v': 'public'
            }
        ], Variations_PropertySetOption_m = [{
                'n': 'findAllSuggestedPropertyOptions',
                'u': '/property_options/suggested',
                'o': false,
                'p': [
                    {
                        'n': 'property_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'category_id',
                        't': 'int'
                    },
                    {
                        'n': 'recipient_id',
                        't': 'int'
                    },
                    {
                        'n': 'sizing_scale',
                        't': 'int'
                    },
                    {
                        'n': 'weight_scale',
                        't': 'int'
                    },
                    {
                        'n': 'height_scale',
                        't': 'int'
                    },
                    {
                        'n': 'length_scale',
                        't': 'int'
                    },
                    {
                        'n': 'width_scale',
                        't': 'int'
                    },
                    {
                        'n': 'diameter_scale',
                        't': 'int'
                    },
                    {
                        'n': 'dimensions_scale',
                        't': 'int'
                    }
                ]
            }], Variations_PropertySetOptionModifier_f = [
            {
                'n': 'prefix',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'suffix',
                't': 'string',
                'v': 'public'
            }
        ], Variations_PropertySetOptionModifier_m = [{
                'n': 'getPropertyOptionModifier',
                'u': '/property_options/modifiers',
                'o': false,
                'p': [
                    {
                        'n': 'property_id',
                        't': 'int',
                        'r': true
                    },
                    {
                        'n': 'category_id',
                        't': 'int'
                    },
                    {
                        'n': 'recipient_id',
                        't': 'int'
                    },
                    {
                        'n': 'sizing_scale',
                        't': 'int'
                    },
                    {
                        'n': 'weight_scale',
                        't': 'int'
                    },
                    {
                        'n': 'height_scale',
                        't': 'int'
                    },
                    {
                        'n': 'length_scale',
                        't': 'int'
                    },
                    {
                        'n': 'width_scale',
                        't': 'int'
                    },
                    {
                        'n': 'diameter_scale',
                        't': 'int'
                    },
                    {
                        'n': 'dimensions_scale',
                        't': 'int'
                    }
                ]
            }], Variations_PropertySetProperty_f = [
            {
                'n': 'property_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'input_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'label',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'param',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'default_option',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'description',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'is_custom',
                't': 'boolean',
                'v': 'public'
            },
            {
                'n': 'title',
                't': 'string',
                'v': 'public'
            }
        ], Variations_SelectedProperty_f = [
            {
                'n': 'property_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'value_id',
                't': 'int',
                'v': 'public'
            },
            {
                'n': 'formatted_name',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'formatted_value',
                't': 'string',
                'v': 'public'
            },
            {
                'n': 'is_valid',
                't': 'boolean',
                'v': 'public'
            }
        ];
}));