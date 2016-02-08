# Validate

To validate is to ensure the data you've requested of the user matches what they've submitted.

# Sanitize
> Cleaning User Input

Sanitization is a bit more liberal of an approach to accepting user data. We can fall back to using these methods when there's a range of acceptable input.

For instance, if we had a form field like this:
```
<input type="text" id="title" name="title" />
```

We could sanitize the data with the sanitize_text_field() function:
```
$title = sanitize_text_field( $_POST['title'] );
update_post_meta( $post->ID, 'title', $title );
```

Behinds the scenes, the function does the following:
- Checks for invalid UTF-8 (uses wp_check_invalid_utf8())
- Converts single < characters to entity
- Strips all tags
- Remove line breaks, tabs and extra white space
- Strip octets
- The sanitize_*() class of helper functions are super nice for us, as they ensure we're ending up with safe data and require minimal effort on our part:

From: https://codex.wordpress.org/Validating_Sanitizing_and_Escaping_User_Data#Sanitizing:_Cleaning_User_Input
