import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }
  block: string = '{}';
  ngOnInit(): void { this.callOninIt(); }
  contentList: RsideBar[] = [];

  callOninIt() {
    const data: RsideBar[] = [
      { name: 'What is javascript ?', id: "What_is_javascript" },
      { name: 'What are the various data types exist in JavaScript?', id: "What_are_the_various_data_types_exist_in_JavaScript" },
      { name: 'what is truthy and falsy values?', id: "what_is_truthy_and_falsy_value" },
      { name: 'What are the possible ways to create objects in JavaScript?', id: "What_are_the_possible_ways_to_create_objects_in_JavaScript" },
      { name: 'What is a prototype chain?', id: "What_is_a_prototype_chain" },
      { name: 'What is the difference between Call, Apply and Bind?', id: "What_is_the_difference_between_Call_Apply_and_Bind" },
      { name: 'what is "this" in Javascript?', id: 'what_is_this_in_Javascript' },
      { name: 'What is JSON and its common operations?', id: "What_is_JSON_and_its_common_operations" },
      { name: 'What is the purpose of the array slice method?', id: "What_is_the_purpose_of_the_array_slice_method" },
      { name: 'What is the purpose of the array splice method?', id: "What_is_the_purpose_of_the_array_splice_method" },
      { name: 'what is the difference between slice and splice?', id: "what_is_the_difference_between_slice_and_splice" },
      { name: 'How do you compare Object and Map?', id: "How_do_you_compare_Object_and_Map" },
      { name: 'What are lambda expressions or arrow functions?', id: "What_are_lambda_expressions_or_arrow_functions" },
      { name: 'What is a first class function?', id: "What_is_a_first_class_function" },
      { name: 'What is a first order function?', id: "What_is_a_first_order_function" },
      { name: 'What is a higher order function?', id: "What_is_a_higher_order_function" },
      { name: 'What is a unary function?', id: "What_is_a_unary_function" },
      { name: 'What is the currying function?', id: "What_is_the_currying_function" },
      { name: 'What is a pure function?', id: "What_is_a_pure_function" },
      { name: 'What is the purpose of the let keyword?', id: "What_is_the_purpose_of_the_let_keyword" },
      { name: 'What is the difference between let and var?', id: "What_is_the_difference_between_let_and_var" },
      { name: 'How do you redeclare variables in a switch block without an error?', id: "How_do_you_redeclare_variables_in_a_switch_block_without_an_error" },
      { name: 'What is the Temporal Dead Zone?', id: "What_is_the_Temporal_Dead_Zone" },
      { name: 'What is an IIFE (Immediately Invoked Function Expression)?', id: "What_is_an_IIFE_Immediately_Invoked_Function_Expression" },
      { name: 'How do you decode or encode a URL in JavaScript?', id: "How_do_you_decode_or_encode_a_URL_in_JavaScript" },
      { name: 'What is memoization?', id: "What_is_memoization" },
      { name: 'Explain each Hoisting, TDZ, lexical scope, Closure, Variable Scope, Function Scope with example?', id: "Explain_each_Hoisting_TDZ_lexical_scope_Closure_Variable_Scop_Function_Scope_with_example" },
      { name: 'What are classes in ES6?', id: "What_are_classes_in_ES6" },
      { name: 'What are modules and Why do you need modules?', id: "What_are_modules_and_Why_do_you_need_modules" },
      { name: 'What is scope in javascript?', id: "What_is_scope_in_javascript" },
      { name: 'What is a service worker?', id: "What_is_a_service_worker" },
      { name: 'How do you manipulate DOM using a service worker?', id: "How_do_you_manipulate_DOM_using_a_service_worker" },
      { name: 'How do you reuse information across service worker restarts?', id: "How_do_you_reuse_information_across_service_worker_restarts" },
      { name: 'What is IndexedDB?', id: "What_is_IndexedDB" },
      { name: 'What is web storage?', id: "What_is_web_storage" },
      { name: 'What is a post message?', id: "What_is_a_post_message" },
      { name: 'What is a Cookie?', id: "What_is_a_Cookie" },
      { name: 'Which types of storage are available in browser?', id: "Which_types_of_storage_are_available_in_browser" },
      { name: 'What are the options in a cookie?', id: "What_are_the_options_in_a_cookie" },
      { name: 'How do you delete a cookie?', id: "How_do_you_delete_a_cookie" },
      { name: 'What are the differences between cookie, local storage and session storage?', id: "What_are_the_differences_between_cookie_local_storage_and_session_storage" },
      { name: 'How do you check web storage browser support?', id: "How_do_you_check_web_storage_browser_support" },
      { name: 'How do you check web workers browser support?', id: "How_do_you_check_web_workers_browser_support" },
      { name: 'Give an example of a web worker?', id: "Give_an_example_of_a_web_worker" },
      { name: 'What are the restrictions of web workers on DOM?', id: "What_are_the_restrictions_of_web_workers_on_DOM" },
      { name: 'In JavaScript how many possible ways are there to handle asynchronous operations?', id: "in_javascript_how_many_possible_ways_are_there_to_handle_asynchronous_operations" },
      { name: 'In Rxjs how many possible ways are there to handle asynchronous operations?', id: "In_Rxjs_how_many_possible_ways_are_there_to_handle_asynchronous_operations" },
      { name: 'What is a callback hell?', id: "What_is_a_callback_hell" },
      { name: 'What are server-sent events?', id: "What_are_server_sent_events" },
      { name: 'How do you receive server-sent event notifications?', id: "How_do_you_receive_server_sent_event_notifications" },
      { name: 'How do you check browser support for server-sent events?', id: "How_do_you_check_browser_support_for_server_sent_events" },
      { name: 'What are the events available for server sent events?', id: "What_are_the_events_available_for_server_sent_events" },
      { name: 'What are the main rules of promise?', id: "What_are_the_main_rules_of_promise" },
      { name: 'What is callback in callback?', id: "What_is_callback_in_callback" },
      { name: 'What is promise chaining?', id: "What_is_promise_chaining" },
      { name: 'What is promise.all?', id: "What_is_promise_all" },
      { name: 'What is the purpose of the race method in promise?', id: "What_is_the_purpose_of_the_race_method_in_promise" },
      { name: 'What is a strict mode in javascript?', id: "What_is_a_strict_mode_in_javascript" },
      { name: 'Why do you need strict mode?', id: "Why_do_you_need_strict_mode" },
      { name: 'How do you declare strict mode?', id: "How_do_you_declare_strict_mode" },
      { name: 'What are script tag attribute?', id: "What_are_script_tag_attribute" },
      { name: 'Explain call(), apply() and, bind() methods.', id: "Explain_call_apply_and_bind_methods" },
      { name: 'What is the purpose of the delete operator?', id: "What_is_the_purpose_of_the_delete_operator" },
      { name: 'How do you detect caps lock key turned on or not?', id: "How_do_you_detect_caps_lock_key_turned_on_or_not" },
      { name: 'What is an event flow?', id: "What_is_an_event_flow" },
      { name: 'What is the difference between native, host and user objects?', id: "What_is_the_difference_between_native_host_and_user_objects" },
      { name: 'What are the pros and cons of promises over callbacks?', id: "What_are_the_pros_and_cons_of_promises_over_callbacks" },
      { name: 'What is the difference between an attribute and a property?', id: "What_is_the_difference_between_an_attribute_and_a_property" },
      { name: 'What is the purpose of void 0?', id: "What_is_the_purpose_of_void" },
      { name: 'What are events?', id: "What_are_events" },
      { name: 'What is the use of preventDefault method?', id: "What_is_the_use_of_preventDefault_method" },
      { name: 'What is the use of stopPropagation method?', id: "What_is_the_use_of_stopPropagation_method" },
      { name: 'Why is JavaScript treated as Single threaded?', id: "Why_is_JavaScript_treated_as_Single_threaded" },
      { name: 'What is an event delegation?', id: "What_is_an_event_delegation" },
      { name: 'What is JSON?', id: "What_is_JSON" },
      { name: 'What is the purpose JSON stringify and parse?', id: "What_is_the_purpose_JSON_stringify_and_parse" },
      { name: 'What are PWAs?', id: "What_are_PWAs" },
      { name: 'How do you redirect new page in javascript?', id: "How_do_you_redirect_new_page_in_javascript" },
      { name: 'How do you check whether a string contains a substring?', id: "How_do_you_check_whether_a_string_contains_a_substring" },
      { name: 'How do you get the current url with javascript?', id: "How_do_you_get_the_current_url_with_javascript" },
      { name: 'What are the various url properties of location object?', id: "What_are_the_various_url_properties_of_location_object" },
      { name: 'How do get query string values in javascript?', id: "How_do_get_query_string_values_in_javascript" },
      { name: 'How do you check if a key exists in an object?', id: "How_do_you_check_if_a_key_exists_in_an_object" },
      { name: 'How do you loop through or enumerate javascript object?', id: "How_do_you_loop_through_or_enumerate_javascript_object" },
      { name: 'How do you test for an empty object?', id: "How_do_you_test_for_an_empty_object" },
      { name: 'What is an arguments object?', id: "What_is_an_arguments_object" },
      { name: 'How do you compare two date objects?', id: "How_do_you_compare_two_date_objects" },
      { name: 'How do you assign default values to variables?', id: "How_do_you_assign_default_values_to_variables" },
      { name: 'What is an app shell model?', id: "What_is_an_app_shell_model" },
      { name: 'Can we define properties for functions?', id: "Can_we_define_properties_for_functions" },
      { name: 'What is the way to find the number of parameters expected by a function?', id: "What_is_the_way_to_find_the_number_of_parameters_expected_by_a_function" },
      { name: 'What is a polyfill?', id: "What_is_a_polyfill" },
      { name: 'What are break and continue statements?', id: "What_are_break_and_continue_statements" },
      { name: 'What are js labels?', id: "What_are_js_labels" },
      { name: 'What are the benefits of keeping declarations at the top?', id: "What_are_the_benefits_of_keeping_declarations_at_the_top" },
      { name: 'What are the benefits of initializing variables?', id: "What_are_the_benefits_of_initializing_variables" },
      { name: 'What are the recommendations to create new object?', id: "What_are_the_recommendations_to_create_new_object" },
      { name: 'How do you define JSON arrays?', id: "How_do_you_define_JSON_arrays" },
      { name: 'Can you write a random integers function to print integers with in a range?', id: "Can_you_write_a_random_integers_function_to_print_integers_with_in_a_range" },
      { name: 'What is tree shaking?', id: "What_is_tree_shaking" },
      { name: 'What is a Regular Expression?', id: "What_is_a_Regular_Expression" },
      { name: 'What are the string methods available in Regular expression?', id: "What_are_the_string_methods_available_in_Regular_expression" },
      { name: 'What is a debugger statement?', id: "What_is_a_debugger_statement" },
      { name: 'How do you detect a mobile browser?', id: "How_do_you_detect_a_mobile_browser" },
      { name: 'How do you detect a mobile browser without regexp?', id: "How_do_you_detect_a_mobile_browser_without_regexp" },
      { name: 'How do you get the image width and height using JS?', id: "How_do_you_get_the_image_width_and_height_using_JS" },
      { name: 'How do you make synchronous HTTP request?', id: "How_do_you_make_synchronous_HTTP_request" },
      { name: 'How do you make asynchronous HTTP request?', id: "How_do_you_make_asynchronous_HTTP_request" },
      { name: 'How do you convert date to another timezone in javascript?', id: "How_do_you_convert_date_to_another_timezone_in_javascript" },
      { name: 'What are the properties used to get size of window?', id: "What_are_the_properties_used_to_get_size_of_window" },
      { name: 'How do you detect a browser language preference?', id: "How_do_you_detect_a_browser_language_preference" },
      { name: 'How to convert string to title case with javascript?', id: "How_to_convert_string_to_title_case_with_javascript" },
      { name: 'How do you detect javascript disabled in the page?', id: "How_do_you_detect_javascript_disabled_in_the_page" },
      { name: 'What is the purpose of using object is method?', id: "What_is_the_purpose_of_using_object_is_method" },
      { name: 'How do you copy properties from one object to other?', id: "How_do_you_copy_properties_from_one_object_to_other" },
      { name: 'What are the applications of assign method?', id: "What_are_the_applications_of_assign_method" },
      { name: 'What is a proxy object?', id: "What_is_a_proxy_object" },
      { name: 'What is the purpose of seal and freeze method?', id: "What_is_the_purpose_of_seal_and_freeze_method" },
      { name: 'What are the differences between freeze and seal methods?', id: "What_are_the_differences_between_freeze_and_seal_methods" },
      { name: 'How do you determine if an object is sealed or not?', id: "How_do_you_determine_if_an_object_is_sealed_or_not" },
      { name: 'How do you get enumerable key and value pairs?', id: "How_do_you_get_enumerable_key_and_value_pairs" },
      { name: 'What is the main difference between Object.values and Object.entries method?', id: "What_is_the_main_difference_between_Object_values_and_Object_entries_method" },
      { name: 'What is a Set?', id: "What_is_a_Set" },
      { name: 'What is a WeakSet?', id: "What_is_a_WeakSet" },
      { name: 'What are the differences between WeakSet and Set?', id: "What_are_the_differences_between_WeakSet_and_Set" },
      { name: 'What is Map?', id: "What_is_Map" },
      { name: 'What is a WeakMap?', id: "What_is_a_WeakMap" },
      { name: 'What are the differences between WeakMap and Map?', id: "What_are_the_differences_between_WeakMap_and_Map" },
      { name: 'How do you print the contents of web page?', id: "How_do_you_print_the_contents_of_web_page" },
      { name: 'What is the difference between uneval and eval?', id: "What_is_the_difference_between_uneval_and_eval" },
      { name: 'What is the precedence order between local and global variables?', id: "What_is_the_precedence_order_between_local_and_global_variables" },
      { name: 'What are javascript accessors?', id: "What_are_javascript_accessors" },
      { name: 'How do you define property on Object constructor?', id: "How_do_you_define_property_on_Object_constructor" },
      { name: 'What is the difference between get and defineProperty?', id: "What_is_the_difference_between_get_and_defineProperty" },
      { name: 'What are the advantages of Getters and Setters?', id: "What_are_the_advantages_of_Getters_and_Setters" },
      { name: 'Can I add getters and setters using defineProperty method?', id: "Can_I_add_getters_and_setters_using_defineProperty_method" },
      { name: 'What are primitive data types?', id: "What_are_primitive_data_types" },
      { name: 'What is an error object?', id: "What_is_an_error_object" },
      { name: 'When you get a syntax error?', id: "When_you_get_a_syntax_error" },
      { name: 'What are the various statements in error handling?', id: "What_are_the_various_statements_in_error_handling" },
      { name: 'What is an Intl object?', id: "What_is_an_Intl_object" },
      { name: 'How do you perform language specific date and time formatting?', id: "How_do_you_perform_language_specific_date_and_time_formatting" },
      { name: 'What is an event loop?', id: "What_is_an_event_loop" },
      { name: 'What is call stack?', id: "What_is_call_stack" },
      { name: 'What is an event queue?', id: "What_is_an_event_queue" },
      { name: 'What are the properties of Intl object?', id: "What_are_the_properties_of_Intl_object" },
      { name: 'How do you reversing an array?', id: "How_do_you_reversing_an_array" },
      { name: 'How do you find min and max value in an array?', id: "How_do_you_find_min_and_max_value_in_an_array" },
      { name: 'How do you find min and max values without Math functions?', id: "How_do_you_find_min_and_max_values_without_Math_functions" },
      { name: 'What is an object initializer?', id: "What_is_an_object_initializer" },
      { name: 'What happens if you write constructor more than once in a class?', id: "What_happens_if_you_write_constructor_more_than_once_in_a_class" },
      { name: 'How do you get the prototype of an object?', id: "How_do_you_get_the_prototype_of_an_object" },
      { name: 'What happens If I pass string type for getPrototype method?', id: "What_happens_If_I_pass_string_type_for_getPrototype_method" },
      { name: 'How do you set prototype of one object to another?', id: "How_do_you_set_prototype_of_one_object_to_another" },
      { name: 'How do you define multiple properties on an object?', id: "How_do_you_define_multiple_properties_on_an_object" },
      { name: 'What Is Obfuscation in javascript?', id: "What_Is_Obfuscation_in_javascript" },
      { name: 'What is Minification?', id: "What_is_Minification" },
      { name: 'What are the differences between Obfuscation and Encryption?', id: "What_are_the_differences_between_Obfuscation_and_Encryption" },
      { name: 'What are the DOM methods available for constraint validation?', id: "What_are_the_DOM_methods_available_for_constraint_validation" },
      { name: 'How do you list all properties of an object?', id: "How_do_you_list_all_properties_of_an_object" },
      { name: 'How do you extend classes?', id: "How_do_you_extend_classes" },
      { name: 'How do I modify the url without reloading the page?', id: "How_do_I_modify_the_url_without_reloading_the_page" },
      { name: 'How do you check whether an array includes a particular value or not?', id: "How_do_you_check_whether_an_array_includes_a_particular_value_or_not" },
      { name: 'How do you compare scalar arrays?', id: "How_do_you_compare_scalar_arrays" },
      { name: 'How do you print numbers with commas as thousand separators?', id: "How_do_you_print_numbers_with_commas_as_thousand_separators" },
      { name: 'Does JavaScript supports namespace?', id: "Does_JavaScript_supports_namespace" },
      { name: 'How do you declare namespace?', id: "How_do_you_declare_namespace" },
      { name: 'How do you invoke javascript code in an iframe from parent page?', id: "How_do_you_invoke_javascript_code_in_an_iframe_from_parent_page" },
      { name: 'How do get the timezone offset from date?', id: "How_do_get_the_timezone_offset_from_date" },
      { name: 'How do you load CSS and JS files dynamically?', id: "How_do_you_load_CSS_and_JS_files_dynamically" },
      { name: 'What is a void operator?', id: "What_is_a_void_operator" },
      { name: 'List down some of the features of ES6?', id: "List_down_some_of_the_features_of_ES6" },
      { name: 'Is const variable makes the value immutable?', id: "Is_const_variable_makes_the_value_immutable" },
      { name: 'What are nesting templates?', id: "What_are_nesting_templates" },
      { name: 'What are tagged templates?', id: "What_are_tagged_templates" },
      { name: 'What are raw strings?', id: "What_are_raw_strings" },
      { name: 'What are enhanced object literals?', id: "What_are_enhanced_object_literals" },
      { name: 'What are dynamic imports?', id: "What_are_dynamic_imports" },
      { name: 'What is the output of below spread operator array?', id: "What_is_the_output_of_below_spread_operator_array" },
      { name: 'How do you convert character to ASCII code?', id: "How_do_you_convert_character_to_ASCII_code" },
      { name: 'What is ArrayBuffer?', id: "What_is_ArrayBuffer" },
      { name: 'What is the output of below string expression?', id: "What_is_the_output_of_below_string_expression" },
      { name: 'Do all objects have prototypes?', id: "Do_all_objects_have_prototypes" },
      { name: 'What is the difference between a parameter and an argument?', id: "What_is_the_difference_between_a_parameter_and_an_argument" },
      { name: 'What is the difference between Shallow and Deep copy?', id: "What_is_the_difference_between_Shallow_and_Deep_copy" },
      { name: 'What are the possible ways to make deep copy?', id: "What_are_the_possible_ways_to_make_deep_copy" },
      { name: 'How do you trim a string at the beginning or ending?', id: "How_do_you_trim_a_string_at_the_beginning_or_ending" },
      { name: 'Does javascript uses mixins?', id: "Does_javascript_uses_mixins" },
      { name: 'What is a thunk function?', id: "What_is_a_thunk_function" },
      { name: 'What are asynchronous thunks?', id: "What_are_asynchronous_thunks" },
      { name: 'How to remove all line breaks from a string?', id: "How_to_remove_all_line_breaks_from_a_string" },
      { name: 'What is the difference between reflow and repaint?', id: "What_is_the_difference_between_reflow_and_repaint" },
      { name: 'How do you remove falsy values from an array?', id: "How_do_you_remove_falsy_values_from_an_array" },
      { name: 'What is destructuring aliases?', id: "What_is_destructuring_aliases" },
      { name: 'How do you map the array values without using map method?', id: "How_do_you_map_the_array_values_without_using_map_method" },
      { name: 'What is the easiest way to convert an array to an object?', id: "What_is_the_easiest_way_to_convert_an_array_to_an_object" },
      { name: 'How do you create an array with some data?', id: "How_do_you_create_an_array_with_some_data" },
      { name: 'How do you verify that an argument is a Number or not?', id: "How_do_you_verify_that_an_argument_is_a_Number_or_not" },
      { name: 'How do you create copy to clipboard button?', id: "How_do_you_create_copy_to_clipboard_button" },
      { name: 'How do you flattening multi dimensional arrays?', id: "How_do_you_flattening_multi_dimensional_arrays" },
      { name: 'What is the easiest multi condition checking?', id: "What_is_the_easiest_multi_condition_checking" },
      { name: 'How do you capture browser back button?', id: "How_do_you_capture_browser_back_button" },
      { name: 'How do you disable right click in the web page?', id: "How_do_you_disable_right_click_in_the_web_page" },
      { name: 'What is minimum timeout throttling?', id: "What_is_minimum_timeout_throttling" },
      { name: 'What is the difference between shim and polyfill?', id: "What_is_the_difference_between_shim_and_polyfill" },
      { name: 'Is Node.js completely single threaded?', id: "Is_Node_js_completely_single_threaded" },
      { name: 'What is a Short circuit condition?', id: "What_is_a_Short_circuit_condition" },
      { name: 'What is the difference between function and class declarations?', id: "What_is_the_difference_between_function_and_class_declarations" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      // { name: 'Variable_Declaration', id: "Variable_Declaration" },
      { name: 'Pattern printing and numbers?', id: "pattern_printing_and_numbers" },
    ];
    this.shearedService.rSidebar_Id_Data$.next(data);
    this.contentList = data;
  }

  code: string = `if ('hello') {
    console.log('This will be executed'); // 'hello' is a truthy value
}

if (42) {
    console.log('This will be executed'); // 42 is a truthy value
}

if ({}) {
    console.log('This will be executed'); // An empty object is a truthy value
}

if ([]) {
  console.log('This will be executed'); // An empty array is a truthy value
}
`;
  code1: string = `if (false) {
    console.log('This will not be executed'); // false is a falsy value
}

if (0) {
    console.log('This will not be executed'); // 0 is a falsy value
}

if (null) {
    console.log('This will not be executed'); // null is a falsy value
}

if (undefined) {
    console.log('This will not be executed'); // undefined is a falsy value
}

if ('') {
    console.log('This will not be executed'); // An empty string is a falsy value
}

if (NaN) {
    console.log('This will not be executed'); // NaN is a falsy value
}
`;
  code2: string = `let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
`;
  code3: string = `function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let person1 = new Person('John', 30, 'New York');
`;
  code4: string = `let personPrototype = {
    greet: function() {
        console.log('Hello!');
    }
};

let person = Object.create(personPrototype);
person.name = 'John';
person.age = 30;
`;
  code5: string = `var object = new Object();`;
  code6: string = `var object = Object();`;
  code7: string = `function Person() {}
  Person.prototype.name = "Sudheer";
  var object = new Person();`;
  code8: string = `function func() {}

  new func(x, y, z);`;
  code9: string = `// Create a new instance using function prototype.
  var newInstance = Object.create(func.prototype)
  
  // Call the function
  var result = func.call(newInstance, x, y, z),
  
  // If the result is a non-null object then use it otherwise just use the new instance.
  console.log(result && typeof result === 'object' ? result : newInstance);`;
  code10: string = `const orgObject = { company: 'XYZ Corp'};
  const carObject = { name: 'Toyota'};
  const staff = Object.assign({}, orgObject, carObject);`;
  code11: string = `class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

let person1 = new Person('John', 30, 'New York');
`;
  code12: string = `function createPerson(name, age, city) {
    return {
        name: name,
        age: age,
        city: city
    };
}

let person1 = createPerson('John', 30, 'New York');
`;
  code13: string = `var object = new (function () {
    this.name = "Sudheer";
  })();`;
  code14: string = `// Create a parent object
  let parent = {
      greet: function() {
          console.log('Hello!');
      }
  };
  
  // Create a child object with parent as its prototype
  let child = Object.create(parent);
  child.name = 'John';
  
  // Access a property/method on the child object
  console.log(child.name);   // Output: John
  child.greet();             // Output: Hello!
  
  // If a property/method is not found on the child object, JavaScript looks up the prototype chain
  // In this case, the greet() method is found on the parent object
  `;
  code15: string = `let person = {
    name: 'John',
    greet: function() {
        console.log('Hello, \${this.name}!');
    }
};

let anotherPerson = {
    name: 'Alice'
};

person.greet.call(anotherPerson); // Output: Hello, Alice!
`;
  code16: string = `let person = {
    name: 'John',
    greet: function(greeting) {
        console.log('\${greeting}, \${this.name}!');
    }
};

let anotherPerson = {
    name: 'Alice'
};

person.greet.apply(anotherPerson, ['Hi']); // Output: Hi, Alice!
`;
  code17: string = `let person = {
    name: 'John',
    greet: function() {
        console.log('Hello, \${this.name}!');
    }
};

let anotherPerson = {
    name: 'Alice'
};

let greetAnotherPerson = person.greet.bind(anotherPerson);
greetAnotherPerson(); // Output: Hello, Alice!
`;
  code18: string = `console.log(this === window); // Output: true`;
  code19: string = `let person = {
    name: 'John',
    greet: function() {
        console.log('Hello, \${this.name}!');
    }
};

person.greet(); // Output: Hello, John!
`;
  code20: string = `function Person(name) {
    this.name = name;
    this.greet = function() {
        console.log('Hello, \${this.name}!');
    };
}

let john = new Person('John');
john.greet(); // Output: Hello, John!
`;
  code21: string = `let person1 = { name: 'John' };
  let person2 = { name: 'Alice' };
  
  function greet() {
      console.log('Hello, \${this.name}!');
  }
  
  greet.call(person1); // Output: Hello, John!
  greet.call(person2); // Output: Hello, Alice!
  `;
  code22: string = `let person = {
    name: 'John',
    greet: function() {
        setTimeout(() => {
            console.log('Hello, \${this.name}!');
        }, 1000);
    }
};

person.greet(); // Output: Hello, John!
`;
  code23: string = `JSON.parse(text);`;
  code24: string = `JSON.stringify(object);`;
  code25: string = `let numbers = [1, 2, 3, 4, 5];
  let slicedNumbers = numbers.slice(1, 4);
  console.log(slicedNumbers); // Output: [2, 3, 4]
  `;
  code26: string = `let originalArray = [1, 2, 3];
  let copiedArray = originalArray.slice();
  console.log(copiedArray); // Output: [1, 2, 3]
  console.log(originalArray === copiedArray); // Output: false (different array references)
  `;
  code27: string = `let numbers = [1, 2, 3, 4, 5];
  let lastThreeNumbers = numbers.slice(-3);
  console.log(lastThreeNumbers); // Output: [3, 4, 5]
  `;
  code28: string = `let numbers = [1, 2, 3, 4, 5];
  let elementsAfterIndex2 = numbers.slice(2);
  console.log(elementsAfterIndex2); // Output: [3, 4, 5]
  `;
  code29: string = `let str = 'Hello, world!';
  let slicedStr = str.slice(7);
  console.log(slicedStr); // Output: world!
  `;
  code30: string = `let emptyArray = [];
  let newArray = emptyArray.slice();
  console.log(newArray); // Output: []
  `;
  code31: string = `array.splice(startIndex, deleteCount, item1, item2, ...);`;
  code32: string = `let numbers = [1, 2, 3, 4, 5];
  numbers.splice(2, 2); // Removes 2 elements starting from index 2
  console.log(numbers); // Output: [1, 2, 5]
  `;
  code33: string = `let numbers = [1, 2, 3, 4, 5];
  numbers.splice(2, 2, 'a', 'b', 'c'); // Removes 2 elements starting from index 2 and adds 'a', 'b', 'c'
  console.log(numbers); // Output: [1, 2, 'a', 'b', 'c', 5]
  `;
  code34: string = `let numbers = [1, 2, 3, 4, 5];
  numbers.splice(2, 0, 'x', 'y'); // Inserts 'x', 'y' at index 2 without removing any elements
  console.log(numbers); // Output: [1, 2, 'x', 'y', 3, 4, 5]
  `;
  code35: string = `let numbers = [1, 2, 3, 4, 5];
  let removedElements = numbers.splice(2, 2);
  console.log(removedElements); // Output: [3, 4]
  console.log(numbers); // Output: [1, 2, 5]
  `;
  code36: string = `let originalArray = [1, 2, 3, 4, 5];
  let slicedArray = originalArray.slice(1, 4);
  console.log(slicedArray); // Output: [2, 3, 4]
  console.log(originalArray); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
  `;
  code37: string = `let originalArray = [1, 2, 3, 4, 5];
  let removedElements = originalArray.splice(1, 2);
  console.log(removedElements); // Output: [2, 3] (removed elements)
  console.log(originalArray); // Output: [1, 4, 5] (original array modified)
  `;
  code38: string = `const arrowFunc1 = (a, b) => a + b; // Multiple parameters
  const arrowFunc2 = a => a * 10; // Single parameter
  const arrowFunc3 = () => {} // no parameters`;
  code39: string = `const handler = () => console.log("This is a click handler function");
  document.addEventListener("click", handler);`;
  code40: string = `const firstOrder = () => console.log("I am a first order function!");`;
  code41: string = `const firstOrderFunc = () =>
    console.log("Hello, I am a First order function");
  const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
  higherOrder(firstOrderFunc);`;
  code42: string = `const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value`;
  code43: string = `const multiArgFunction = (a, b, c) => a + b + c;
  console.log(multiArgFunction(1, 2, 3)); // 6
  
  const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
  curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
  curryUnaryFunction(1)(2); // returns a function: c => 3 + c
  curryUnaryFunction(1)(2)(3); // returns the number 6`;
  code44: string = `//Impure
  let numberArray = [];
  const impureAddNumber = (number) => numberArray.push(number);
  //Pure
  const pureAddNumber = (number) => (argNumberArray) =>
    argNumberArray.concat([number]);
  
  //Display the results
  console.log(impureAddNumber(6)); // returns 1
  console.log(numberArray); // returns [6]
  console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
  console.log(numberArray); // returns [6]`;
  code45: string = `let counter = 30;
  if (counter === 30) {
    let counter = 31;
    console.log(counter); // 31
  }
  console.log(counter); // 30 (because the variable in if block won't exist here)`;
  code46: string = `function userDetails(username) {
    if (username) {
      console.log(salary); // undefined due to hoisting
      console.log(age); // ReferenceError: Cannot access 'age' before initialization
      let age = 30;
      var salary = 10000;
    }
    console.log(salary); //10000 (accessible due to function scope)
    console.log(age); //error: age is not defined(due to block scope)
  }
  userDetails("John");`;
  code47: string = `let counter = 1;
  switch (x) {
    case 0:
      let name;
      break;
  
    case 1:
      let name; // SyntaxError for redeclaration.
      break;
  }`;
  code48: string = `let counter = 1;
  switch (x) {
    case 0: {
      let name;
      break;
    }
    case 1: {
      let name; // No SyntaxError for redeclaration.
      break;
    }
  }`;
  code49: string = `function somemethod() {
    console.log(counter1); // undefined
    console.log(counter2); // ReferenceError
    var counter1 = 1;
    let counter2 = 2;
  }`;
  code50: string = `(function () {
    // logic here
  })();`;
  code51: string = `(function () {
    var message = "IIFE";
    console.log(message);
  })();
  console.log(message); //Error: message is not defined`;
  code52: string = `let uri = "employeeDetails?name=john&occupation=manager";
  let encoded_uri = encodeURI(uri);
  let decoded_uri = decodeURI(encoded_uri);`;
  code53: string = `const memoizAddition = () => {
    let cache = {};
    return (value) => {
      if (value in cache) {
        console.log("Fetching from cache");
        return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
      } else {
        console.log("Calculating result");
        let result = value + 20;
        cache[value] = result;
        return result;
      }
    };
  };
  // returned function from memoizAddition
  const addition = memoizAddition();
  console.log(addition(20)); //output: 40 calculated
  console.log(addition(20)); //output: 40 cached`;
  code54: string = `console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
  `;
  code55: string = `var x;
  console.log(x);
  x = 5;
  console.log(x);
  `;
  code56: string = `console.log(x); // Throws ReferenceError
  let x = 5;
  `;
  code57: string = `let a = 10;
  function myFunction() {
      console.log(a); // 10
  }
  myFunction();
  `;
  code58: string = `function outerFunction() {
    let outerVariable = 20;
    function innerFunction() {
        console.log(outerVariable); // 20
    }
    return innerFunction;
}
let innerFunc = outerFunction();
innerFunc();
`;
  code59: string = `// Global scope
  let globalVar = "I am global";
  
  function outerFunction() {
      // Function scope
      let outerVar = "I am outer";
      console.log(globalVar); // Accessible
      console.log(outerVar); // Accessible
  
      function innerFunction() {
          // Inner function scope
          let innerVar = "I am inner";
          console.log(globalVar); // Accessible
          console.log(outerVar); // Accessible
          console.log(innerVar); // Accessible
      }
  
      innerFunction();
      // console.log(innerVar); // Error: innerVar is not defined
  }
  
  outerFunction();
  // console.log(outerVar); // Error: outerVar is not defined
  `;
  code60: string = `function outerFunction() {
    let outerVar = "I am outer";
    console.log(outerVar); // Accessible

    function innerFunction() {
        let innerVar = "I am inner";
        console.log(innerVar); // Accessible
    }

    innerFunction();
    // console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
// console.log(outerVar); // Error: outerVar is not defined
`;
  code61: string = `function Bike(model, color) {
    this.model = model;
    this.color = color;
  }
  
  Bike.prototype.getDetails = function () {
    return this.model + " bike has" + this.color + " color";
  };`;
  code62: string = `class Bike {
    constructor(color, model) {
      this.color = color;
      this.model = model;
    }
  
    getDetails() {
      return this.model + " bike has" + this.color + " color";
    }
  }`;
  code63: string = `document.cookie = "username=John";`;
  code64: string = `localStorage.setItem('key', 'value');
  let value = localStorage.getItem('key');
  `;
  code65: string = `sessionStorage.setItem('key', 'value');
  let value = sessionStorage.getItem('key');
  `;
  code66: string = `// Open a database
  let request = indexedDB.open('databaseName', version);
  
  // Create an object store
  let objectStore = db.createObjectStore('storeName', { keyPath: 'id' });
  
  // Add data to the object store
  objectStore.add({ id: 1, data: 'value' });
  
  // Retrieve data from the object store
  let transaction = db.transaction(['storeName'], 'readonly');
  let objectStore = transaction.objectStore('storeName');
  let request = objectStore.get(1);
  `;
  code67: string = `document.cookie = 'name=value; expires=Sun, 31 Dec 2023 23:59:59 GMT; path=/';
  let cookieValue = document.cookie;
  `;
  code68: string = `sessionStorage.setItem('key', 'value');
  let value = sessionStorage.getItem('key');
  `;
  code69: string = `// Cache a response
  caches.open('cacheName').then(cache => {
      cache.put(request, response);
  });
  
  // Retrieve a response from the cache
  caches.match(request).then(response => {
      if (response) {
          // Use cached response
      }
  });
  `;
  code70: string = `// Open a cache
  caches.open('my-cache').then(cache => {
      // Cache a resource
      cache.add('/path/to/resource');
  
      // Retrieve a resource from the cache
      cache.match('/path/to/resource').then(response => {
          if (response) {
              // Use cached response
          }
      });
  });
  `;
  code71: string = `document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";`;
  code72: string = `document.cookie = "username=John; path=/services";`;
  code73: string = `document.cookie =
  "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";`;
  code74: string = `if (typeof Storage !== "undefined") {
    // Code for localStorage/sessionStorage.
  } else {
    // Sorry! No Web Storage support..
  }`;
  code75: string = `if (typeof Worker !== "undefined") {
    // code for Web worker support.
  } else {
    // Sorry! No Web Worker support..
  }`;
  code76: string = `let i = 0;

  function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()", 500);
  }
  
  timedCount();`;
  code77: string = `if (typeof w == "undefined") {
    w = new Worker("counter.js");
  }`;
  code78: string = `w.onmessage = function (event) {
    document.getElementById("message").innerHTML = event.data;
  };`;
  code79: string = `w.terminate();`;
  code80: string = `w = undefined;`;
  code81: string = `function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const error = Math.random() < 0.3 ? new Error("Failed to fetch data") : null;
        const data = error ? null : "Data from API";
        callback(error, data);
    }, 2000);
}

// Usage of callback
fetchDataWithCallback((error, data) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Data received (Callback):", data);
    }
});`;
  code82: string = `function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = Math.random() < 0.3 ? new Error("Failed to fetch data") : null;
            const data = error ? null : "Data from API";
            error ? reject(error) : resolve(data);
        }, 2000);
    });
}

// Usage of Promise
fetchDataWithPromise()
    .then((data) => {
        console.log("Data received (Promise):", data);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
`;
  code83: string = `async function fetchDataWithAsyncAwait() {
    try {
        const data = await fetchDataWithPromise();
        console.log("Data received (Async/Await):", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Usage of Async/Await
fetchDataWithAsyncAwait();

`;
  code84: string = `const EventEmitter = require('events');

  class DataEmitter extends EventEmitter {}
  
  const dataEmitter = new DataEmitter();
  
  dataEmitter.on('data', (data) => {
      console.log("Data received (Event Emitters):", data);
  });
  
  function fetchDataWithEventEmitter() {
      setTimeout(() => {
          const error = Math.random() < 0.3 ? new Error("Failed to fetch data") : null;
          const data = error ? null : "Data from API";
          error ? dataEmitter.emit('error', error) : dataEmitter.emit('data', data);
      }, 2000);
  }
  
  // Usage of Event Emitters
  fetchDataWithEventEmitter();
  `;
  code85: string = `function* fetchGenerator() {
    try {
        const data = yield fetchDataWithPromise();
        console.log("Data received (Generators):", data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

const generator = fetchGenerator();
generator.next().value
    .then((data) => {
        generator.next(data);
    })
    .catch((error) => {
        generator.throw(error);
    });`;
  code86: string = `import { Observable } from 'rxjs';

  const observable = new Observable(observer => {
      setTimeout(() => {
          observer.next('Data from Observable');
          observer.complete();
      }, 2000);
  });
  
  observable.subscribe({
      next: data => console.log('Data received (Observable):', data),
      error: error => console.error('Error:', error),
      complete: () => console.log('Observable completed')
  });
  `;
  code87: string = `import { of } from 'rxjs';
  import { map, catchError } from 'rxjs/operators';
  
  of('Data from Observable')
      .pipe(
          map(data => data.toUpperCase()),
          catchError(error => {
              console.error('Error:', error);
              return of('Error occurred');
          })
      )
      .subscribe(data => console.log('Transformed Data:', data));
  `;
  code88: string = `import { Subject } from 'rxjs';

  const subject = new Subject();
  
  subject.subscribe({
      next: data => console.log('Observer 1:', data)
  });
  
  subject.next('Data from Subject');
  
  subject.subscribe({
      next: data => console.log('Observer 2:', data)
  });
  
  subject.next('More data from Subject');
  `;
  code89: string = `import { asyncScheduler } from 'rxjs';

  asyncScheduler.schedule(() => {
      console.log('Scheduled task');
  });
  `;
  code90: string = `import { throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  
  throwError(new Error('Error occurred'))
      .pipe(
          catchError(error => {
              console.error('Error:', error.message);
              return throwError('Handled error');
          })
      )
      .subscribe(data => console.log(data));
  `;
  code91: string = `async1(function(){
    async2(function(){
        async3(function(){
            async4(function(){
                ....
            });
        });
    });
});`;
  code92: string = `if (typeof EventSource !== "undefined") {
    var source = new EventSource("sse_generator.js");
    source.onmessage = function (event) {
      document.getElementById("output").innerHTML += event.data + "<br>";
    };
  }`;
  code93: string = `if (typeof EventSource !== "undefined") {
    // Server-sent events supported. Let's have some code here!
  } else {
    // No server-sent events supported
  }`;
  code94: string = `loadScript("/script1.js", function (script) {
    console.log("first script is loaded");
  
    loadScript("/script2.js", function (script) {
      console.log("second script is loaded");
  
      loadScript("/script3.js", function (script) {
        console.log("third script is loaded");
        // after all scripts are loaded
      });
    });
  });`;
  code95: string = `new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  })
    .then(function (result) {
      console.log(result); // 1
      return result * 2;
    })
    .then(function (result) {
      console.log(result); // 2
      return result * 3;
    })
    .then(function (result) {
      console.log(result); // 6
      return result * 4;
    });`;
  code96: string = `Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log('Error in promises \${error}'))`;
  code97: string = `var promise1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, "one");
  });
  var promise2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, "two");
  });
  
  Promise.race([promise1, promise2]).then(function (value) {
    console.log(value); // "two" // Both promises will resolve, but promise2 is faster
  });`;
  code98: string = `"use strict";
  x = 3.14; // This will cause an error because x is not declared`;
  code99: string = `x = 3.14; // This will not cause an error.
  myFunction();
  
  function myFunction() {
    "use strict";
    y = 3.14; // This will cause an error
  }`;
  code100: string = `<script src="script.js"></script>`;
  code101: string = `
<script type="text/javascript">
  // JavaScript code here
</script>
`;
  code102: string = `<script src="script.js" async></script>`;
  code103: string = `<script src="script.js" defer></script>`;
  code104: string = `<script src="script.js" integrity="sha384-ABC123"></script>`;
  code105: string = `<script src="https://example.com/script.js" crossorigin="anonymous"></script>`;
  code106: string = `function sayHello(){
    return "Hello " + this.name;
  }
          
  var obj = {name: "Sandy"};
          
  sayHello.call(obj);
          
  // Returns "Hello Sandy"	`;
  code107: string = `var person = {
    age: 23,
    getAge: function(){
      return this.age;
    }
  }        
  var person2 = {age:  54};
  person.getAge.call(person2);      
  // Returns 54  `;
  code108: string = `function saySomething(message){
    return this.name + " is " + message;
  }     
  var person4 = {name:  "John"};     
  saySomething.call(person4, "awesome");
  // Returns "John is awesome"    `;
  code109: string = `function saySomething(message){
    return this.name + " is " + message;
  }        
  var person4 = {name:  "John"};
  saySomething.apply(person4, ["awesome"]);`;
  code110: string = `var bikeDetails = {
    displayDetails: function(registrationNumber,brandName){
    return this.name+ " , "+ "bike details: "+ registrationNumber + " , " + brandName;
  }
}
   
var person1 = {name:  "Vivek"};
     
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
      
// Binds the displayDetails function to the person1 object
        
      
detailsOfPerson1();
//Returns Vivek, bike details: TS0122, Bullet`;
code111: string = `
for(let i=1; i<=4; i++){
  let pa = "";
  for(let j=1; j<=i; j++){
      pa += i+" "; 
  }
  console.log(pa);
}`;
code112: string = `
1 
2 2 
3 3 3 
4 4 4 4`;
code113: string = `
for(let i=1; i<=4; i++){
  let pa = "";
  for(let j=1; j<=i; j++){
      pa += j+" "; 
  }
  console.log(pa);
}`;
code114: string = `
1 
1 2 
1 2 3 
1 2 3 4 `;
code115: string = `
let counter = 1;
for(let i=1; i<=4; i++){
    let pa= "";
    for(let j=1; j<=i; j++){
        pa += counter+" ";
        counter++;
    }
    console.log(pa);
}`;
code116: string = `
1 
2 3 
4 5 6 
7 8 9 10`;
code117: string = `
for(let i=1; i<=4; i++){
  let pa = "";
  for(let j=4; j>=i; j--){
      pa += " ";
  }
  for(let k=1; k<=i; k++){
      pa += i+" ";
  }
  console.log(pa);
}`;
code118: string = `    
   1 
  2 2 
 3 3 3 
4 4 4 4 `;
code119: string = `
for(let i=1; i<=4; i++){
  let pa = "";
  for(let j=4; j>=i; j--){
      pa += " ";
  }
  for(let k=1; k<=i; k++){
      pa += k+" ";
  }
  console.log(pa);
}`;
code120: string = `
   1 
  1 2 
 1 2 3 
1 2 3 4`;
code121: string = `
let couter = 1;
for(let i=1; i<=4; i++){
    let pa = "";
    for(let j=4; j>=i; j--){
        pa += " ";
    }
    for(let k=1; k<=i; k++){
        pa += couter+" ";
        couter++;
    }
    console.log(pa);
}`;
code122: string = `
    1 
   2 3 
  4 5 6 
 7 8 9 10 `;
code123: string = `
for(let i=1; i<=5; i++){
  let pa = "";
  for(let k=1; k<=i; k++){
      pa += " * ";
  }
  console.log(pa);
}`;
code124: string = `
* 
*  * 
*  *  * 
*  *  *  * 
*  *  *  *  * `;
code125: string = `
for(let i=1; i<=5; i++){
  let pa = "";
  for(let k=5; k>=i; k--){
      pa += " * ";
  }
  console.log(pa);
}`;
code126: string = `
*  *  *  *  * 
*  *  *  * 
*  *  * 
*  * 
* `;
code127: string = ` 
let n = 5;
for(let i = 0; i<=n; i++){
 let patern = "";
 for(let j=1;j<=(n-i);j++){
     patern += j;
 }
 console.log(patern); 
}`;
code128: string = `
12345
1234
123
12
1`;
code129: string = ` 
let n = 5;
function getPattern(n){
   for(let i = 0; i<=n; i++){
   if(i%2!==0){
       let patern = "";
       for(let k=n; k>=i; k--){
         patern += " ";
       }
       for(let j=1;j<=i;j++){
       patern += j+" ";
       }
       console.log(patern); 
   }
 }
};
getPattern(n);`;
code130: string = `
    1 
  1 2 3 
1 2 3 4 5 `;
code131: string = `
let n = 5;
function getPatteern(n){
    for (let i = 2; i < n; i++) {
        let patt = "";
        if(i!==1){
            for (let j = n; j > i; j--) {
                patt += " ";
            }
            
        for (let j = 0; j < i; j++) {
                patt += " *";
            }
            
        for (let j = n; j > i; j--) {
                patt += " ";
            }
        
        for (let j = n; j > i; j--) {
                patt += " ";
            }
        
        for (let j = 0; j < i; j++) {
                patt += " *";
            }
        }
        console.log(patt);
    }

for (let i = 0; i < n*2; i++) {
        let patt = "";
    
        for (let j = 0; j < i; j++) {
                patt += " ";
            }
            
        for (let j = n*2; j > i; j--) {
                patt += " *";
            }
        
        console.log(patt);
    }
}

getPatteern(n);`;
code132: string = `
    * *       * *
   * * *     * * *
  * * * *   * * * *
 * * * * * * * * * *
  * * * * * * * * *
   * * * * * * * *
    * * * * * * *
     * * * * * *
      * * * * *
       * * * *
        * * *
         * *
          *
`;
code133: string = `
 let n = 5;
for (let i = 0; i < n; i++) {
       let patt = "";
   
       for (let j = n; j > i; j--) {
               patt += " ";
           }
           
       for (let j = 0; j < i; j++) {
               patt += " *";
           }
       
       console.log(patt);
   }
   
for (let i = 0; i < n; i++) {
       let patt = "";
   
       for (let j = 0; j < i; j++) {
               patt += " ";
           }
           
       for (let j = n; j > i; j--) {
               patt += " *";
           }
       
       console.log(patt);
   }
`;
code134: string = `
     *
    * *
   * * *
  * * * *
 * * * * *
  * * * *
   * * *
    * *
     * `;
code135: string = ` 
let n = 5;
for (let i = 0; i < n; i++) {
       let patt = "";
   
       for (let j = 0; j < i; j++) {
               patt += " ";
           }
           
       for (let j = n; j > i; j--) {
               patt += " *";
           }
       
       console.log(patt);
   }
   
   for (let i = 1; i < n+1; i++) {
       let patt = "";
   
       for (let j = n; j > i; j--) {
               patt += " ";
           }
           
       for (let j = 0; j < i; j++) {
               patt += " *";
           }
       
       console.log(patt);
   }

`;
code136: string = ` 
* * * * *
 * * * *
  * * *
   * *
    *
    *
   * *
  * * *
 * * * *
* * * * *`;
code137: string = ` 
let n = 5;
for (let i = 0; i < n; i++) {
       let patt = "";
       for (let j = 0; j <= i; j++) {
               patt += "*";
       }
       for (let j = n; j >i; j--) {
               patt += "  ";
       }
       for (let j = 0; j <= i; j++) {
               patt += "*";
       }
       console.log(patt);
   }
   
   
   for (let i = 1; i < n; i++) {
       let patt = "";
       for (let j = n; j-1 >= i; j--) {
               patt += "*";
       }
       for (let j = 0; j<=i; j++) {
               patt += "  ";
       }
       for (let j = n; j-1 >= i; j--) {
               patt += "*";
       }
       console.log(patt);
   }


`;
code138: string = `
*          *
**        **
***      ***
****    ****
*****  *****
****    ****
***      ***
**        **
*          *`;
code139: string = `
let n = 5;
function getFibonacciSq(n){
    if(n>=0){
    let arr = [0,1];
    for(let i = 2; i<=n; i++){
        let next = arr[i-1] + arr[i-2];
         if(n<next){
            break;
        }
        arr.push(next);
     }
     return n>0?arr:[0];
    }
}

let series = getFibonacciSq(n);
console.log(series);`;
code140: string = `[ 0, 1, 1, 2, 3, 5 ]`;
code141: string = `
let n = 10;
function getPowersofSq(n){
    if(n>=1){
    let arr = [];
    for(let i = 0; i<=n; i++){
        let next = 2**i;
         if(n<next){
            break;
        }
        arr.push(next);
     }
     return arr;
    }
}

let series = getPowersofSq(n);
console.log(series);`;
code142: string = `[ 1, 2, 4, 8 ]`;
code143: string = `
let n = 55;
function getTriangular(n){
    if(n>=1){
    let arr = [];
    for(let i = 1; i<=n; i++){
        let next = (i*(i+1))/2;
         if(n<next){
            break;
        }
        arr.push(next);
     }
     return arr;
    }
}

let series = getTriangular(n);
console.log(series);`;
code144: string = `[1,  3, 6, 10, 15, 21, 28, 36, 45, 55]`;
code145: string = `
function checkPrime(num) {
  if (num < 2) return false;
  for (i = 2; i < num; i++) { if (num % i === 0) return false; }
  return true;
}

function getPrime(num){
  let primeList = [];
  if(num>1){
  for(let i=0; i<=num; i++){
      if(checkPrime(i)){
          primeList.push(i);
      } 
    }   
  }
  return primeList;
}

let series = getPrime(30);
console.log(series);`;
code146: string = `[2,  3,  5,  7, 11, 13, 17, 19, 23, 29]`;
code147: string = `
let n = 100;
function getSquare(n){
    if(n>=1){
    let arr = [];
    for(let i = 1; i<=n; i++){
        let next = i*i;
         if(n<next){
            break;
        }
        arr.push(next);
     }
     return arr;
    }
}

let series = getSquare(n);
console.log(series);`;
code148: string = `[1,  4,  9, 16,  25, 36, 49, 64, 81, 100]`;
code149: string = `
var user = { firstName: "John", lastName:"Doe", age: 20 };
delete user.age;

console.log(user); // {firstName: "John", lastName:"Doe"}`;
code150: string = `
<input type="password" onmousedown="enterInput(event)" />

<p id="feedback"></p>

<script>
  function enterInput(e) {
    var flag = e.getModifierState("CapsLock");
    if (flag) {
      document.getElementById("feedback").innerHTML = "CapsLock activated";
    } else {
      document.getElementById("feedback").innerHTML =
        "CapsLock not activated";
    }
  }
</script>`;
code151: string = `
<div>
<button class="child">Hello</button>
</div>

<script>
const parent = document.querySelector("div");
const child = document.querySelector(".child");

parent.addEventListener("click",
  function () {
    console.log("Parent");
  },
  true
);

child.addEventListener("click", function () {
  console.log("Child");
});
</script>
// Parent
// Child`;
code152: string = `    
<div>
<button class="child">Hello</button>
</div>

<script>
const parent = document.querySelector("div");
const child = document.querySelector(".child");

parent.addEventListener("click",
  function () {
    console.log("Parent");
  }
);

child.addEventListener("click", function () {
  console.log("Child");
});
</script>
// Child
// Parent`;
code153: string = `<a href="https://www.example.com">Example Website</a>`;
code154: string = `
<!DOCTYPE html>
<html>
<body>

<p id="demo">Example Paragraph</p>

<script>
var paragraph = document.getElementById("demo");
console.log(paragraph.innerHTML); // Output: Example Paragraph
</script>

</body>
</html>
`;
code155: string = `
<a href="JavaScript:void(0);" onclick="alert('Well done!')">
Click Me!
</a>`;
code156: string = `
<!doctype html>
<html>
 <head>
   <script>
     function greeting() {
       alert('Hello! Good morning');
     }
   </script>
 </head>
 <body>
   <button type="button" onclick="greeting()">Click me</button>
 </body>
</html>`;
code157: string = `document
.getElementById("link")
.addEventListener("click", function (event) {
  event.preventDefault();
});`;
code158: string = `
<p>Click DIV1 Element</p>
<div onclick="secondFunc()">DIV 2
  <div onclick="firstFunc(event)">DIV 1</div>
</div>

<script>
function firstFunc(event) {
  alert("DIV 1");
  event.stopPropagation();
}

function secondFunc() {
  alert("DIV 2");
}
</script>`;
code159: string = `
var form = document.querySelector("#registration-form");

// Listen for changes to fields inside the form
form.addEventListener(
  "input",
  function (event) {
    // Log the field that was changed
    console.log(event.target);
  },
  false
);`;
code160: string = `
var userJSON = { name: "John", age: 31 };
var userString = JSON.stringify(userJSON);
console.log(userString); //"{"name":"John","age":31}"`;
code161: string = `
var userString = '{"name":"John","age":31}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "John", age: 31}`;
code162: string = `function redirect() {
  window.location.href = "newPage.html";
}`;
code163: string = `
let string = "Hello, world!";
let substring = "world";

if (string.includes(substring)) {
    console.log("Substring found!");
} else {
    console.log("Substring not found!");
}
`;
code164: string = `
let string = "Hello, world!";
let substring = "world";

if (string.indexOf(substring) !== -1) {
    console.log("Substring found!");
} else {
    console.log("Substring not found!");
}
`;
code165: string = `
let string = "Hello, world!";
let substring = "world";

let regex = new RegExp(substring);

if (regex.test(string)) {
    console.log("Substring found!");
} else {
    console.log("Substring not found!");
}
`;
code166: string = `console.log("location.href", window.location.href); // Returns full URL`;
code167: string = `const urlParams = new URLSearchParams(window.location.search);
const clientCode = urlParams.get("clientCode");`;
code168: string = `"key" in obj;`;
code169: string = `!("key" in obj);`;
code170: string = `obj.hasOwnProperty("key"); // true`;
code171: string = `
const user = {
  name: "John",
};

console.log(user.name !== undefined); // true
console.log(user.nickName !== undefined); // false`;
code172: string = `
var object = {
  k1: "value1",
  k2: "value2",
  k3: "value3",
};

for (var key in object) {
  if (object.hasOwnProperty(key)) {
    console.log(key + " -> " + object[key]); // k1 -> value1 ...
  }
}`;
code173: string = `Object.entries(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well`;
code174: string = `Object.keys(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well`;
code175: string = `
function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}`;
code176: string = `
function sum() {
  var total = 0;
  for (var i = 0, len = arguments.length; i < len; ++i) {
    total += arguments[i];
  }
  return total;
}

sum(1, 2, 3); // returns 6`;
code177: string = `var argsArray = Array.prototype.slice.call(arguments);`;
code178: string = `
var d1 = new Date();
var d2 = new Date(d1);
console.log(d1.getTime() === d2.getTime()); //True
console.log(d1 === d2); // False`;
code179: string = `var a = b || c;`;
code180: string = `
fn = function (x) {
  //Function code goes here
};

fn.name = "John";

fn.profile = function (y) {
  //Profile code goes here
};`;
code181: string = `
function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
sum.length; // 4 is the number of parameters expected.`;
code182: string = `
for (i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  text += "Number: " + i + "<br>";
}`;
code183: string = `
for (i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  text += "Number: " + i + "<br>";
}`;
code184: string = `
var i, j;

loop1: for (i = 0; i < 3; i++) {
  loop2: for (j = 0; j < 3; j++) {
    if (i === j) {
      continue loop1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Output is:
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"`;
code185: string = `
var v1 = {};
var v2 = "";
var v3 = 0;
var v4 = false;
var v5 = [];
var v6 = /()/;
var v7 = function () {};`;
code186: string = `
"users":[
  {"firstName":"John", "lastName":"Abrahm"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Shane", "lastName":"Warn"}
]`;
code187: string = `
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomInteger(1, 100); // returns a random integer from 1 to 100
randomInteger(1, 1000); // returns a random integer from 1 to 1000`;
code188: string = `function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length-1; i >= 0; i--) {
      reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("Praveen")); 
// neevarP`;
code189: string = `function PalindromeNum(num) {
  let numvalue = String(num);
  let reversedNum = '';
  for (let i = numvalue.length-1; i >= 0; i--) {
      reversedNum += numvalue[i];
  }
  if(numvalue===reversedNum){
      return +reversedNum;
  }else{
      return "Number is not Palindrome";
  }
}

console.log(PalindromeNum(123444321));
console.log(PalindromeNum(1234443210));
// 123444321
// Number is not Palindrome`;
code190: string = `/pattern/modifiers;`;
code191: string = `/John/i;`;
code192: string = `var msg = "Hello John";
var n = msg.search(/John/i); // 6`;
code193: string = `var msg = "Hello John";
var n = msg.replace(/John/i, "Buttler"); // Hello Buttler`;
code194: string = `function getProfile() {
  // code goes here
  debugger;
  // code goes here
}`;
code195: string = `window.mobilecheck = function () {
  var mobileCheck = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      mobileCheck = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return mobileCheck;
};`;
code196: string = `function detectmob() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}`;
code197: string = `var img = new Image();
img.onload = function () {
  console.log(this.width + "x" + this.height);
};
img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";`;
code198: string = `function httpGet(theUrl) {
  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", theUrl, false); // false for synchronous request
  xmlHttpReq.send(null);
  return xmlHttpReq.responseText;
}`;
code199: string = `function httpGetAsync(theUrl, callback) {
  var xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
      callback(xmlHttpReq.responseText);
  };
  xmlHttpReq.open("GET", theUrl, true); // true for asynchronous
  xmlHttpReq.send(null);
}`;
code200: string = `console.log(event.toLocaleString("en-GB", { timeZone: "UTC" })); //29/06/2019, 09:56:00`;
code201: string = `var width =
window.innerWidth ||
document.documentElement.clientWidth ||
document.body.clientWidth;

var height =
window.innerHeight ||
document.documentElement.clientHeight ||
document.body.clientHeight;`;
code202: string = `var language =
(navigator.languages && navigator.languages[0]) || // Chrome / Firefox
navigator.language || // All browsers
navigator.userLanguage; // IE <= 10

console.log(language);`;
code203: string = `function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}
toTitleCase("good morning john"); // Good Morning John`;
code204: string = `<script type="javascript">
// JS related code goes here
</script>
<noscript>
<a href="next_page.html?noJS=true">JavaScript is disabled in the page. Please click Next Page</a>
</noscript>`;
code205: string = `Object.assign(target, ...sources);`;
code206: string = `const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 3, c: 4 }

console.log(returnedTarget); // { a: 1, b: 3, c: 4 }`;
code207: string = `var p = new Proxy(target, handler);`;
code208: string = ` //Example1:

const person = {
  name: 'Sudheer Jonna',
  age: 35
};

const handler = {
get(target, prop) {
  if (prop === 'name') {
    return 'Mr. ' + target[prop];
  }
  return target[prop];
}
};

const proxy = new Proxy(person, handler);

//Example2: 

var handler1 = {
get: function (obj, prop) {
  return prop in obj ? obj[prop] : 100;
},
};

var p = new Proxy({}, handler1);
p.a = 10;
p.b = null;

console.log(p.a, p.b); // 10, null
console.log("c" in p, p.c); // false, 100`;
code209: string = `const object = {
  property: "Welcome JS world",
};
Object.seal(object);
object.property = "Welcome to object world";
console.log(Object.isSealed(object)); // true
delete object.property; // You cannot delete when sealed
console.log(object.property); //Welcome to object world`;
code210: string = `const obj = {
  prop: 100,
};

Object.freeze(obj);
obj.prop = 200; // Throws an error in strict mode

console.log(obj.prop); //100`;
code211: string = `const user = {
  name: "John",
  employment: {
    department: "IT",
  },
};

Object.freeze(user);
user.employment.department = "HR";`;
code212: string = `const object = {
  property: "Hello, Good morning",
};

Object.seal(object); // Using seal() method to seal the object

console.log(Object.isSealed(object)); // checking whether the object is sealed or not`;
code213: string = `const object = {
  a: "Good morning",
  b: 100,
};

for (let [key, value] of Object.entries(object)) {
  console.log('\${key}: \${value}'); // a: 'Good morning'
  // b: 100
}`;
code214: string = `const object = {
  a: "Good morning",
  b: 100,
};

for (let value of Object.values(object)) {
  console.log('\${value}'); // 'Good morning \n100'
}`;
code215: string = `// Creating a new Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(5);
mySet.add('hello');
mySet.add({ name: 'Alice' });

// Adding a duplicate value (this will have no effect since 1 is already in the Set)
mySet.add(1);

// Checking for values in the Set
console.log(mySet.has(1));    // true
console.log(mySet.has(3));    // false

// Deleting a value from the Set
mySet.delete(5);

// Iterating over the Set
mySet.forEach(value => {
  console.log(value);
});

// Another way to iterate using for...of loop
for (let value of mySet) {
  console.log(value);
}

// Clearing the Set
mySet.clear();
console.log(mySet.size); // 0 (the Set is now empty)

const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers); // [1, 2, 3, 4, 5, 6, 7]

`;
code216: string = `new WeakSet([iterable]);`;
code217: string = `var ws = new WeakSet();
var user = {};
ws.add(user);
ws.has(user); // true
ws.delete(user); // removes user from the set
ws.has(user); // false, user has been removed`;
code218: string = `var weakSetObject = new WeakSet();
var firstObject = {};
var secondObject = {};
// add(value)
weakSetObject.add(firstObject);
weakSetObject.add(secondObject);
console.log(weakSetObject.has(firstObject)); //true
weakSetObject.delete(secondObject);`;
code219: string = `// Creating a new Map
const myMap = new Map();

// Setting key-value pairs
myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set(true, 'Boolean key');
myMap.set(1, 'Number key');

// Setting an object as a key
const objKey = { id: 1 };
myMap.set(objKey, 'Object key');

// Getting values by keys
console.log(myMap.get('name'));       // 'Alice'
console.log(myMap.get('age'));        // 25
console.log(myMap.get(true));         // 'Boolean key'
console.log(myMap.get(1));            // 'Number key'
console.log(myMap.get(objKey));       // 'Object key'

// Checking for keys
console.log(myMap.has('name'));       // true
console.log(myMap.has('nonexistent')); // false

// Deleting a key-value pair
myMap.delete('age');
console.log(myMap.has('age'));        // false

// Iterating over the Map
myMap.forEach((value, key) => {
  console.log('\${key}: \${value}');
});

// Another way to iterate using for...of loop
for (let [key, value] of myMap) {
  console.log('\${key}: \${value}');
}

// Clearing the Map
myMap.clear();
console.log(myMap.size); // 0 (the Map is now empty)

const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const itemCount = new Map();

items.forEach(item => {
  if (itemCount.has(item)) {
    itemCount.set(item, itemCount.get(item) + 1);
  } else {
    itemCount.set(item, 1);
  }
});

for (let [item, count] of itemCount) {
  console.log('\${item}: \${count}');
}

// Output:
// apple: 3
// banana: 2
// orange: 1


`;
code220: string = `new WeakMap([iterable]);`;
code221: string = `var ws = new WeakMap();
var user = {};
ws.set(user);
ws.has(user); // true
ws.delete(user); // removes user from the map
ws.has(user); // false, user has been removed`;
code222: string = `<input type="button" value="Print" onclick="window.print()" />`;
code223: string = `var msg = uneval(function greeting() {
  return "Hello, Good morning";
});
var greeting = eval(msg);
greeting(); // returns "Hello, Good morning"`;
code224: string = `var msg = "Good morning";
function greeting() {
  msg = "Good Evening";
  console.log(msg); // Good Evening
}
greeting();`;
code225: string = `var user = {
  firstName: "John",
  lastName: "Abraham",
  language: "en",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  },
};
console.log(user.lang); // getter access lang as en
user.lang = "fr";
console.log(user.lang); // setter used to set lang as fr`;
code226: string = `const newObject = {};

Object.defineProperty(newObject, "newProperty", {
  value: 100,
  writable: false,
});

console.log(newObject.newProperty); // 100

newObject.newProperty = 200; // It throws an error in strict mode due to writable setting`;
code227: string = `var obj = { counter: 0 };

// Define getters
Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});

// Define setters
Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});

obj.add = 10;
obj.subtract = 5;
console.log(obj.increment); //6
console.log(obj.decrement); //5`;
code228: string = `try {
  greeting("Welcome");
} catch (err) {
  console.log(err.name + "<br>" + err.message);
}`;
code229: string = `try {
  eval("greeting('welcome)"); // Missing ' will produce an error
} catch (err) {
  console.log(err.name);
}`;
code230: string = `var date = new Date(Date.UTC(2019, 07, 07, 3, 0, 0));
console.log(new Intl.DateTimeFormat("en-GB").format(date)); // 07/08/2019
console.log(new Intl.DateTimeFormat("en-AU").format(date)); // 07/08/2019`;
code231: string = `function hungry() {
  eatFruits();
}
function eatFruits() {
  return "I'm eating fruits";
}

// Invoke the 'hungry' function
hungry();`;
code232: string = `let numbers = [1, 2, 5, 3, 4];
numbers.sort((a, b) => b - a);
numbers.reverse();
console.log(numbers); // [1, 2, 3, 4 ,5]`;
code233: string = `var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  return Math.min.apply(null, arr);
}
function findMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(findMin(marks));
console.log(findMax(marks));`;
code234: string = `var marks = [50, 20, 70, 60, 45, 30];
function findMin(arr) {
  var length = arr.length;
  var min = Infinity;
  while (length--) {
    if (arr[length] < min) {
      min = arr[length];
    }
  }
  return min;
}

function findMax(arr) {
  var length = arr.length;
  var max = -Infinity;
  while (length--) {
    if (arr[length] > max) {
      max = arr[length];
    }
  }
  return max;
}

console.log(findMin(marks));
console.log(findMax(marks));`;
code235: string = `var initObject = { a: "John", b: 50, c: {} };

console.log(initObject.a); // John`;
code236: string = ` class Employee {
  constructor() {
    this.name = "John";
  }
  constructor() {   //  Uncaught SyntaxError: A class may only have one constructor
    this.age = 30;
  }
}

var employeeObject = new Employee();

console.log(employeeObject.name);`;
code237: string = `const newPrototype = {};
const newObject = Object.create(newPrototype);

console.log(Object.getPrototypeOf(newObject) === newPrototype); // true`;
code238: string = `// ES5
Object.getPrototypeOf("James"); // TypeError: "James" is not an object
// ES2015
Object.getPrototypeOf("James"); // String.prototype`;
code239: string = `Object.setPrototypeOf(Square.prototype, Rectangle.prototype);
Object.setPrototypeOf({}, null);`;
code240: string = `const newObject = {};

Object.defineProperties(newObject, {
  newProperty1: {
    value: "John",
    writable: true,
  },
  newProperty2: {},
});`;
code241: string = `function greeting() {
  console.log("Hello, welcome to JS world");
}`;
code242: string = `eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return c;
    };
    if (!"".replace(/^/, String)) {
      while (c--) {
        d[c] = k[c] || c;
      }
      k = [
        function (e) {
          return d[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      }
    }
    return p;
  })(
    "2 1(){0.3('4, 7 6 5 8')}",
    9,
    9,
    "console|greeting|function|log|Hello|JS|to|welcome|world".split("|"),
    0,
    {}
  )
);`;
code243: string = `function myFunction() {
  var userName = document.getElementById("uname");
  if (!userName.checkValidity()) {
    document.getElementById("message").innerHTML =
      userName.validationMessage;
  } else {
    document.getElementById("message").innerHTML =
      "Entered a valid username";
  }
}`;
code244: string = `<input id="age" type="number" max="100" />
<button onclick="myOverflowFunction()">OK</button>
`;
code245: string = `
function myOverflowFunction() {
  if (document.getElementById("age").validity.rangeOverflow) {
    alert("The mentioned age is not allowed");
  }
}`;
code246: string = `const newObject = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(newObject));
["a", "b", "c"];`;
code247: string = `const newObject = {
  a: 1,
  b: 2,
  c: 3,
};
const descriptorsObject = Object.getOwnPropertyDescriptors(newObject);
console.log(descriptorsObject.a.writable); //true
console.log(descriptorsObject.a.configurable); //true
console.log(descriptorsObject.a.enumerable); //true
console.log(descriptorsObject.a.value); // 1`;
code248: string = `class ChildClass extends ParentClass { ... }`;
code249: string = `class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.area = value;
  }
}`;
code250: string = `window.history.pushState("page2", "Title", "/page2.html");`;
code251: string = `var numericArray = [1, 2, 3, 4];
console.log(numericArray.includes(3)); // true

var stringArray = ["green", "yellow", "blue"];
console.log(stringArray.includes("blue")); //true`;
code252: string = `const arrayFirst = [1, 2, 3, 4, 5];
const arraySecond = [1, 2, 3, 4, 5];
console.log(
  arrayFirst.length === arraySecond.length &&
    arrayFirst.every((value, index) => value === arraySecond[index])
); // true`;
code253: string = `const arrayFirst = [2, 3, 1, 4, 5];
const arraySecond = [1, 2, 3, 4, 5];
console.log(
  arrayFirst.length === arraySecond.length &&
    arrayFirst.sort().every((value, index) => value === arraySecond[index])
); //true`;
code254: string = `function convertToThousandFormat(x) {
  return x.toLocaleString(); // 12,345.679
}

console.log(convertToThousandFormat(12345.6789));`;
code255: string = `function func1() {
  console.log("This is a first definition");
}
function func1() {
  console.log("This is a second definition");
}
func1(); // This is a second definition`;
code256: string = `var namespaceOne = {
  function func1() {
      console.log("This is a first definition");
  }
}
var namespaceTwo = {
    function func1() {
        console.log("This is a second definition");
    }
}
namespaceOne.func1(); // This is a first definition
namespaceTwo.func1(); // This is a second definition`;
code257: string = `(function () {
  function fun1() {
    console.log("This is a first definition");
  }
  fun1();
})();

(function () {
  function fun1() {
    console.log("This is a second definition");
  }
  fun1();
})();`;
code258: string = `{
  let myFunction = function fun1() {
    console.log("This is a first definition");
  };
  myFunction();
}
//myFunction(): ReferenceError: myFunction is not defined.

{
  let myFunction = function fun1() {
    console.log("This is a second definition");
  };
  myFunction();
}
//myFunction(): ReferenceError: myFunction is not defined.`;
code259: string = `document.getElementById("targetFrame").contentWindow.targetFunction();
window.frames[0].frameElement.contentWindow.targetFunction(); // Accessing iframe this way may not work in latest versions chrome and firefox`;
code260: string = `var offset = new Date().getTimezoneOffset();
console.log(offset); // -480`;
code261: string = `function loadAssets(filename, filetype) {
  if (filetype == "css") {
    // External CSS file
    var fileReference = document.createElement("link");
    fileReference.setAttribute("rel", "stylesheet");
    fileReference.setAttribute("type", "text/css");
    fileReference.setAttribute("href", filename);
  } else if (filetype == "js") {
    // External JavaScript file
    var fileReference = document.createElement("script");
    fileReference.setAttribute("type", "text/javascript");
    fileReference.setAttribute("src", filename);
  }
  if (typeof fileReference != "undefined")
    document.getElementsByTagName("head")[0].appendChild(fileReference);
}`;
code262: string = `void expression;
void expression;`;
code263: string = `<a href="javascript:void(alert('Welcome to JS world'))">
Click here to see a message
</a>`;
code264: string = `const userList = [];
userList.push("John"); // Can mutate even though it can't re-assign
console.log(userList); // ['John']`;
code265: string = `const iconStyles = 'icon \${
  isMobilePlatform()
    ? ""
    : 'icon-\${user.isAuthorized ? "submit" : "disabled"}'
}';`;
code266: string = `//Without nesting templates
const iconStyles = 'icon \${
  isMobilePlatform()
    ? ""
    : user.isAuthorized
    ? "icon-submit"
    : "icon-disabled"
}';`;
code267: string = `var user1 = "John";
var skill1 = "JavaScript";
var experience1 = 15;

var user2 = "Kane";
var skill2 = "JavaScript";
var experience2 = 5;

function myInfoTag(strings, userExp, experienceExp, skillExp) {
  var str0 = strings[0]; // "Mr/Ms. "
  var str1 = strings[1]; // " is a/an "
  var str2 = strings[2]; // "in"

  var expertiseStr;
  if (experienceExp > 10) {
    expertiseStr = "expert developer";
  } else if (skillExp > 5 && skillExp <= 10) {
    expertiseStr = "senior developer";
  } else {
    expertiseStr = "junior developer";
  }

  return '\${str0}\${userExp}\${str1}\${expertiseStr}\${str2}\${skillExp}';
}

var output1 = myInfoTag'Mr/Ms. \${user1} is a/an \${experience1} in \${skill1}';
var output2 = myInfoTag'Mr/Ms. \${user2} is a/an \${experience2} in \${skill2}';

console.log(output1); // Mr/Ms. John is a/an expert developer in JavaScript
console.log(output2); // Mr/Ms. Kane is a/an junior developer in JavaScript`;
code268: string = `var calculationString = String.raw'The sum of numbers is \n${
  1 + 2 + 3 + 4
}!';
console.log(calculationString); // The sum of numbers is \n10!`;
code269: string = `var calculationString = 'The sum of numbers is \n${1 + 2 + 3 + 4}!';
console.log(calculationString);
// The sum of numbers is
// 10!`;
code270: string = `function tag(strings) {
  console.log(strings.raw[0]);
}`;
code271: string = `//ES6
var x = 10,
  y = 20;
obj = { x, y };
console.log(obj); // {x: 10, y:20}
//ES5
var x = 10,
  y = 20;
obj = { x: x, y: y };
console.log(obj); // {x: 10, y:20}`;
code272: string = `import("./Module").then((Module) => Module.method());`;
code273: string = `[..."John Resig"];`;
code274: string = `"ABC".charCodeAt(0); // returns 65`;
code275: string = `String.fromCharCode(65, 66, 67); // returns 'ABC'`;
code276: string = `let buffer = new ArrayBuffer(16); // create a buffer of length 16
alert(buffer.byteLength); // 16`;
code277: string = `//Create a DataView referring to the buffer
let view = new DataView(buffer);`;
code278: string = `console.log("Welcome to JS world"[0]);`;
code279: string = `function myFunction(parameter1, parameter2, parameter3) {
  console.log(arguments[0]); // "argument1"
  console.log(arguments[1]); // "argument2"
  console.log(arguments[2]); // "argument3"
}
myFunction("argument1", "argument2", "argument3");`;
code280: string = `var empDetails = {
  name: "John",
  age: 25,
  expertise: "Software Developer",
};  `;
code281: string = `var empDetailsShallowCopy = empDetails; //Shallow copying!`;
code282: string = `empDetailsShallowCopy.name = "Johnson";`;
code283: string = `var empDetails = {
  name: "John",
  age: 25,
  expertise: "Software Developer",
};`;
code284: string = `var empDetailsDeepCopy = {
  name: empDetails.name,
  age: empDetails.age,
  expertise: empDetails.expertise,
};`;
code285: string = `const original = { a: 1, b: { c: 2 } };
const copy = JSON.parse(JSON.stringify(original));
`;
code286: string = `function deepCopy(obj, hash = new WeakMap()) {
  if (Object(obj) !== obj) return obj; // Primitives
  if (hash.has(obj)) return hash.get(obj); // Circular reference
  const result = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor() : Object.create(null);
  hash.set(obj, result);
  return Object.keys(obj).reduce((acc, key) => {
      acc[key] = deepCopy(obj[key], hash);
      return acc;
  }, result);
}

const original = { a: 1, b: { c: 2 }, d: function() { return 3; } };
const copy = deepCopy(original);
`;
code287: string = `const _ = require('lodash');
const original = { a: 1, b: { c: 2 } };
const copy = _.cloneDeep(original);
`;
code288: string = `const original = { a: 1, b: { c: 2 } };
const copy = structuredClone(original);
`;
code289: string = `function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepCopy);
  const copy = {};
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
          copy[key] = deepCopy(obj[key]);
      }
  }
  return copy;
}

const original = { a: 1, b: { c: 2 } };
const copy = deepCopy(original);
`;
code290: string = `const structuredClone = require('structured-clone');
const original = { a: 1, b: { c: 2 } };
const copy = structuredClone(original);
`;
code291: string = `var greeting = "   Hello, Goodmorning!   ";

console.log(greeting); // "   Hello, Goodmorning!   "
console.log(greeting.trimStart()); // "Hello, Goodmorning!   "
console.log(greeting.trimLeft()); // "Hello, Goodmorning!   "

console.log(greeting.trimEnd()); // "   Hello, Goodmorning!"
console.log(greeting.trimRight()); // "   Hello, Goodmorning!"`;
code292: string = `// mixin
let cleanRoomMixin = {
  cleanRoom() {
    alert('Hello \${this.name}, your room is clean now');
  },
  sayBye() {
    alert('Bye \${this.name}');
  },
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, cleanRoomMixin);

// now User can clean the room
new User("Dude").cleanRoom(); // Hello Dude, your room is clean now!`;
code293: string = `const add = (x, y) => x + y;

const thunk = () => add(2, 3);

thunk(); // 5`;
code294: string = `function fetchData(fn) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => fn(json));
}

const asyncThunk = function () {
  return fetchData(function getData(data) {
    console.log(data);
  });
};

asyncThunk();`;
code295: string = `function remove_linebreaks( var message ) {
  return message.replace( /[\r\n]+/gm, "" );
}`;
code296: string = `const myArray = [false, null, 1, 5, undefined];
myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);`;
code297: string = `const obj = { x: 1 };
// Grabs obj.x as as { otherName }
const { x: otherName } = obj;`;
code298: string = `const countries = [
  { name: "India", capital: "Delhi" },
  { name: "US", capital: "Washington" },
  { name: "Russia", capital: "Moscow" },
  { name: "Singapore", capital: "Singapore" },
  { name: "China", capital: "Beijing" },
  { name: "France", capital: "Paris" },
];

const cityNames = Array.from(countries, ({ capital }) => capital);
console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']`;
code299: string = `var fruits = ["banana", "apple", "orange", "watermelon"];
var fruitsObject = { ...fruits };
console.log(fruitsObject); // {0: "banana", 1: "apple", 2: "orange", 3: "watermelon"}`;
code300: string = `var newArray = new Array(5).fill("0");
console.log(newArray); // ["0", "0", "0", "0", "0"]`;
code301: string = `function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}`;
code302: string = `document.querySelector("#copy-button").onclick = function () {
  // Select the content
  document.querySelector("#copy-input").select();
  // Copy to the clipboard
  document.execCommand("copy");
};`;
code303: string = `const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]`;
code304: string = `function flattenMultiArray(arr) {
  const flattened = [].concat(...arr);
  return flattened.some((item) => Array.isArray(item))
    ? flattenMultiArray(flattened)
    : flattened;
}
const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]`;
code305: string = `const arr = [1, [2, 3], 4, 5, [6, 7]];
const fllattenArr = arr.flat(); // [1, 2, 3, 4, 5, 6, 7]

// And for multiDemensional arrays
const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
const oneStepFlat = multiDimensionalArr.flat(1); // [11, 22, 33, 44, [55, 66, [77, [88]], 99]]
const towStep = multiDimensionalArr.flat(2); // [11, 22, 33, 44, 55, 66, [77, [88]], 99]
const fullyFlatArray = multiDimensionalArr.flat(Infinity); // [11, 22, 33, 44, 55, 66, 77, 88, 99]`;
code306: string = `// Verbose approach
if (
  input === "first" ||
  input === 1 ||
  input === "second" ||
  input === 2
) {
  someFunction();
}
// Shortcut
if (["first", 1, "second", 2].indexOf(input) !== -1) {
  someFunction();
}`;
code307: string = ` window.addEventListener('beforeunload', () => {
  console.log('Clicked browser back button');
});`;
code308: string = `window.addEventListener('popstate', () => {
  console.log('Clicked browser back button');
  box.style.backgroundColor = 'white';
});

const box = document.getElementById('div');

box.addEventListener('click', () => {
box.style.backgroundColor = 'blue';
window.history.pushState({}, null, null);
});

In the preceeding code, When the box element clicked, its background color appears in blue color and changed to while color upon clicking the browser back button using 'popstate' event handler. The 'state' property of 'popstate' contains the copy of history entry's state object.

 **[⬆ Back to Top](#table-of-contents)**

`;
code309: string = `<body oncontextmenu="return false;"></body>`;
code310: string = `function runMeFirst() {
  console.log("My script is initialized");
}
setTimeout(runMeFirst, 0);
console.log("Script loaded");`;
code311: string = `Script loaded
My script is initialized`;
code312: string = `function runMeFirst() {
  console.log("My script is initialized");
}
runMeFirst();
console.log("Script loaded");`;
code313: string = `My script is initialized
Script loaded`;
code314: string = `if (authenticate) {
  loginToPorta();
}`;
code315: string = `authenticate && loginToPorta();`;
code316: string = `const user = new User(); // ReferenceError

class User {}`;
code317: string = `const user = new User(); // No error

function User() {}`;
code318: string = ``;
code319: string = ``;
code320: string = ``;


  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }
  scroll(id: string, duration: number = 200) {
    const element = document.querySelector(id);
    if (element) {
      const startTime = performance.now();
      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = element.getBoundingClientRect().top + startPosition - 50;
      const scrollStep = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startPosition + (targetPosition - startPosition) * progress);
        if (progress < 1) { window.requestAnimationFrame(scrollStep); }
      };
      window.requestAnimationFrame(scrollStep);
    }
  }


}
